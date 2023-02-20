import {Client} from "@elastic/elasticsearch";

const client = new Client({
    node: `${process.env.ELASTIC_SEARCH}`,
});

const Sections_Chapters = async (_index:string) => {

    const searchResult = await client
      .search({
        index: _index,
        size: 7000,
        query: {
          match_all: {},
        },
      })
      .catch((e) => console.log("errr", e));
    return searchResult;
};

export default Sections_Chapters;
