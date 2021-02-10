const fetch = require("node-fetch")

// constants for your GraphQL Column and Row types
const BASE_NODE_TYPE = `SmartSheetNode`
const COLUMN_NODE_TYPE = `SmartSheetColumn`
const ROW_NODE_TYPE = `SmartSheetRow`

exports.sourceNodes = async (
  { actions, createNodeId, createContentDigest },
  configOptions
) => {
  const { createNode } = actions

  const apiUrl = `https://api.smartsheet.com/2.0/sheets/${configOptions.sheetId}`
  // const response = await fetch(apiUrl);
  let response = await fetch(apiUrl, {
    method: "get",
    headers: {
      Authorization: `Bearer ${configOptions.accessToken}`,
      "Content-type": "application/json",
      Accept: "application/json",
      "Accept-Charset": "utf-8",
    },
  })
  const data = await response.json()

  const node = {
    id: createNodeId(`${BASE_NODE_TYPE}-${data.id}`),
    name: data.name,
    permalink: data.permalink,
    totalRowCount: data.totalRowCount,
    internal: {
      type: BASE_NODE_TYPE,
      contentDigest: createContentDigest(data),
    },
  }

  createNode(node)

  data.columns.forEach(column => {
    createNode({
      ...column,
      id: `${column.id}`,
      parent: null,
      children: [],
      internal: {
        type: COLUMN_NODE_TYPE,
        content: JSON.stringify(column),
        contentDigest: createContentDigest(column),
      },
    })
  })

  data.rows.forEach(row => {
    createNode({
      ...row,
      id: `${row.id}`,
      parent: null,
      children: [],
      internal: {
        type: ROW_NODE_TYPE,
        content: JSON.stringify(row),
        contentDigest: createContentDigest(row),
      },
    })
  })

  return
}
