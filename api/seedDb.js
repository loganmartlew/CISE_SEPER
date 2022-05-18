const { config } = require('dotenv');
const connectDB = require('./src/db');
const { Article } = require('./src/models/Article');

const main = async () => {
  config();

  console.log('Connecting to the database');
  await connectDB();

  console.log('Removing all articles');
  await Article.remove({});

  const articles = [
    {
      title:
        'Design and code inspections to reduce errors in program development',
      authors: 'Fagan, M',
      year: '1976',
      doi: 'http://dx.doi.org/10.1093/ajae/aaq063',
    },
    {
      title: 'Practical programmer: inspections—some surprising findings',
      authors: 'Glass, Robert L',
      year: '1999',
      doi: 'http://dx.doi.org/10.1093/ajae/aaq063',
    },
    {
      title:
        'Developing Software in a Bicultural Context: The Role of a SoDIS®  Inspection',
      authors: 'Gotterbarn, D and Clear, T and Gray, W and Houliston, B',
      year: '2006',
      doi: 'http://dx.doi.org/10.1093/ajae/aaq063',
    },
    {
      title:
        'Agile process improvement: diagnosis and planning to improve teamwork',
      authors:
        'Ringstad, Mats Angermo and Dingsøyr, Torgeir and Moe, Nils Brede',
      year: '2011',
      doi: 'http://dx.doi.org/10.1093/ajae/aaq063',
    },
    {
      title: 'Improving Software Inspections with Group Process Support',
      authors: 'Tyran, C and George, J',
      year: '2002',
      doi: 'http://dx.doi.org/10.1093/ajae/aaq063',
    },
    {
      title: 'Distributed Collaborative Software Inspection',
      authors: 'VMashayeki and Drake, J and Tsai, W and Riedl, J',
      year: '1993',
      doi: 'http://dx.doi.org/10.1093/ajae/aaq063',
    },
  ];

  console.log('Inserting articles');
  await Promise.all(
    articles.map(async (article) => {
      const newArticle = new Article();
      newArticle.title = article.title;
      newArticle.authors = article.authors;
      newArticle.year = article.year;
      newArticle.doi = article.doi;
      await newArticle.save();
    })
  );

  console.log('Done');
};

main();
