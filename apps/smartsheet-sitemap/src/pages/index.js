import React from 'react';
import { graphql } from 'gatsby';
import OrgChart from '../components/Chart';
import '../App.css';

export default function Home({ data }) {
  // const columns = data.allSmartSheetColumn.edges
  const rows = data.allSmartSheetRow.edges;
  const columns = data.allSmartSheetColumn.edges;
  // console.log(columns)
  const allColumnTitlesToParse = [
    'Page Title',
    'Page Type',
    'Source URL',
    'Main Nav',
    'Notes',
  ];
  // .map(item => item.replace(/\s/g, "_"))

  // find column with "specific name" name
  const filterColumnByName = (wordToCompare) => {
    return function (element) {
      return element.node.title === wordToCompare;
    };
  };
  const grabColumnID = (item) => {
    item = item.node.id;
    return parseInt(item);
  };

  // grab all the columnIDs from titles
  const allColumnIDs = allColumnTitlesToParse.map((title) => {
    // console.log("title inside allColumnTitlesToParse", title)
    let id = columns
      .filter(filterColumnByName(title))
      .map((item) => grabColumnID(item))
      .shift();
    return id;
  });
  console.log('allColumnIDs: ', allColumnIDs);
  // grab "Page Title" column ID
  const pageTitleID = columns
    .filter(filterColumnByName('Page Title'))
    .map((item) => grabColumnID(item))
    .shift();

  const pageTypeID = columns
    .filter(filterColumnByName('Page Type'))
    .map((item) => grabColumnID(item))
    .shift();

  const sourceURLID = columns
    .filter(filterColumnByName('New URL'))
    .map((item) => grabColumnID(item))
    .shift();

  const figmaUrlID = columns
    .filter(filterColumnByName('Prototype'))
    .map((item) => grabColumnID(item))
    .shift();

  const noteID = columns
    .filter(filterColumnByName('Notes'))
    .map((item) => grabColumnID(item))
    .shift();

  console.log(
    'pageTitleID, pageTypeID, sourceURLID, figmaUrlID',
    pageTitleID,
    pageTypeID,
    sourceURLID,
    figmaUrlID,
    noteID
  );

  // map over rows and grab contents
  const filteredRows = rows.map(function (row, index, array) {
    row = row.node;
    let container = {};
    container.id = row.id;
    container.pid = row.parentId;

    // console.log("The array is: ", array)
    // console.log('The value of "this" is', this)
    // console.log("The index is: ", index)
    // allColumnIDs.map(function (columnID, indexOfColumnID) {
    // console.log("*************allColumnIDs: The columnID", columnID)
    // console.log('allColumnIDs: The value of "this" is', this)
    // console.log("allColumnIDs: The i is: ", i)
    //
    //
    // below code loops through all of the fields_# to expose them all to the Chart
    //
    // row.cells
    //   .filter(function (cell) {
    //     return cell.columnId === this;
    //   }, columnID)
    //   .map(function (cell) {
    //     // console.log("cell.displayValue", cell.displayValue)
    //     // console.log("=============columnID", this)
    //     container[`field_${indexOfColumnID}`] = cell.displayValue;
    //     return (container.name = cell.displayValue);
    //   }, indexOfColumnID);
    // })
    row.cells
      .filter((item) => item.columnId === pageTypeID)
      .map((cell) => (container.tags = [cell.displayValue]));

    row.cells
      .filter((item) => item.columnId === pageTitleID)
      .map((cell) => (container['Page Name'] = cell.displayValue));

    row.cells
      .filter((item) => item.columnId === sourceURLID)
      .map((cell) => (container.sourceUrl = cell.displayValue));

    row.cells
      .filter((item) => item.columnId === figmaUrlID)
      .map((cell) => (container['Prototype'] = cell.displayValue));

    row.cells
      .filter((item) => item.columnId === noteID)
      .map((cell) => (container.note = cell.displayValue));

    return container;
  });

  console.log('-------filteredRows', filteredRows);

  return (
    <div style={{ height: '100vh' }}>
      <h1>{data.smartSheetNode.name}</h1>
      <p className="ss-link">
        <a
          href={data.smartSheetNode.permalink}
          target="_blank"
          rel="nofollow noopener noreferrer"
        >
          Open SmartSheet
        </a>
      </p>
      <OrgChart nodes={filteredRows} />
    </div>
  );
}

export const query = graphql`
  query getColumns {
    allSmartSheetRow {
      edges {
        node {
          parentId
          rowNumber
          id
          cells {
            displayValue
            columnId
          }
        }
      }
    }
    smartSheetNode {
      name
      permalink
    }
    allSmartSheetColumn {
      edges {
        node {
          title
          id
        }
      }
    }
  }
`;
