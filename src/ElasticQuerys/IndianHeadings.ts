import {Client} from "@elastic/elasticsearch";

const client = new Client({
    node: `${process.env.ELASTIC_SEARCH}`,
});

const IndianHeadings = async (_index:string,phrase:string) => {

  const searchResult = await client
    .search({
      index: _index,
      size: 7000,
      query: {
        match_phrase: {
            chapter: {
              query: phrase
            }
          }
      },
    })
    .catch((e:any) => console.log("errr", e));
  return searchResult;
};

export default IndianHeadings;
