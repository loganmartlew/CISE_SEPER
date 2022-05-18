import { useState, useMemo, useReducer, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { useTable, useSortBy, useFilters } from 'react-table';
import { Stack, Typography } from '@mui/material';
import tableColumns from '../features/articles/ArticlesFilters/columns';
import Card from '../components/Card';
import PageTitle from '../components/PageTitle';
import ArticlesTable from '../features/articles/ArticlesTable';
import useSearchArticles from '../features/articles/useSearchArticles';
import SearchBar from '../components/SearchBar';
import ArticlesFilters from '../features/articles/ArticlesFilters';
import {
  defaultState,
  reducer,
} from '../features/articles/ArticlesFilters/filtersReducer';

const SearchArticles = () => {
  const { q } = useParams();
  const [search, setSearch] = useState(q);
  const { articles, loading, error } = useSearchArticles(search);

  const [filters, dispatchFilters] = useReducer(reducer, defaultState);

  const navigate = useNavigate();

  const columns = useMemo(() => tableColumns, []);

  const data = useMemo(
    () =>
      // eslint-disable-next-line implicit-arrow-linebreak
      articles.map((article) => ({
        title: article.title,
        sePractice: article.sePractice.name,
        authors: article.authors,
        year: article.year,
        doi: article.doi,
      })),
    [articles]
  );

  const table = useTable(
    {
      columns,
      data,
    },
    useFilters,
    useSortBy
  );

  useEffect(() => {
    table.setFilter('sePractice', filters.practice);

    const hiddenColumns = Object.entries(filters.columns)
      .filter((column) => column[1] === false)
      .map((column) => column[0]);

    table.setHiddenColumns(hiddenColumns);
  }, [filters]);

  const submit = (e) => {
    e.preventDefault();
    navigate(`/search?q=${search}`);
  };

  return (
    <Stack spacing={3}>
      <PageTitle>Search For An Article</PageTitle>
      <SearchBar
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        onSubmit={submit}
      />
      <Card>
        <ArticlesFilters
          columns={columns}
          filters={filters}
          dispatchFilters={dispatchFilters}
        />
      </Card>
      <Card>
        {(() => {
          if (error) {
            return <Typography>{error}</Typography>;
          }

          if (loading) {
            return <Typography>Loading...</Typography>;
          }

          return <ArticlesTable {...table} />;
        })()}
      </Card>
    </Stack>
  );
};

export default SearchArticles;
