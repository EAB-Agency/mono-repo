import React, { Component } from 'react';
// import OrgChart from "@balkangraph/orgchart.js"

import OrgChart from '../orgchart';

OrgChart.templates.GenericInterior = Object.assign({}, OrgChart.templates.rony);
OrgChart.templates.GenericInterior.size = [120, 240];
OrgChart.templates.GenericInterior.node =
  '<svg width="120" height="150" viewBox="0 0 120 150" fill="none" xmlns="http://www.w3.org/2000/svg"><rect width="120" height="150" rx="4" fill="#B8D0B9"/><path fill-rule="evenodd" clip-rule="evenodd" d="M8 16H112C114.209 16 116 17.7909 116 20V142C116 144.209 114.209 146 112 146H8C5.79086 146 4 144.209 4 142V20C4 17.7909 5.79086 16 8 16Z" fill="#F6F8F9"/><rect x="6" y="18" width="35" height="126" rx="4" fill="#DEE7EE"/><path d="M24 48C30.6274 48 36 42.6274 36 36C36 29.3726 30.6274 24 24 24C17.3726 24 12 29.3726 12 36C12 42.6274 17.3726 48 24 48Z" fill="#B8C5D0"/><mask id="mask0" mask-type="alpha" maskUnits="userSpaceOnUse" x="12" y="24" width="24" height="24"><path d="M24 48C30.6274 48 36 42.6274 36 36C36 29.3726 30.6274 24 24 24C17.3726 24 12 29.3726 12 36C12 42.6274 17.3726 48 24 48Z" fill="white"/></mask><g mask="url(#mask0)"><path fill-rule="evenodd" clip-rule="evenodd" d="M24.5 43.56C27.54 43.56 30 45.01 30 46.79C30 48.57 27.54 48.86 24.5 48.86C21.46 48.86 19 48.57 19 46.79C19 45.01 21.46 43.56 24.5 43.56ZM24.5 33C26.43 32.9528 28.1962 34.0794 28.9672 35.8493C29.7381 37.6193 29.3601 39.6798 28.0111 41.0608C26.6621 42.4419 24.611 42.8682 22.8234 42.139C21.0359 41.4098 19.8681 39.6705 19.87 37.74C19.8548 36.4972 20.3342 35.2994 21.2026 34.4104C22.0711 33.5213 23.2573 33.0139 24.5 33Z" fill="#89969F"/></g><rect x="13" y="54" width="21" height="3" rx="1" fill="#B8C5D0"/><rect x="13" y="60" width="21" height="3" rx="1" fill="#B8C5D0"/><rect x="13" y="66" width="21" height="3" rx="1" fill="#B8C5D0"/><rect x="47" y="36" width="52" height="3" rx="1" fill="#89969F"/><rect x="47" y="47" width="61" height="3" rx="1" fill="#B8C5D0"/><rect x="47" y="53" width="62" height="3" rx="1" fill="#B8C5D0"/><rect x="47" y="59" width="59" height="3" rx="1" fill="#B8C5D0"/><rect x="47" y="65" width="60" height="3" rx="1" fill="#B8C5D0"/><rect x="47" y="71" width="61" height="3" rx="1" fill="#B8C5D0"/><rect x="47" y="77" width="59" height="3" rx="1" fill="#B8C5D0"/><rect x="47" y="83" width="62" height="3" rx="1" fill="#B8C5D0"/><rect x="47" y="89" width="49" height="3" rx="1" fill="#B8C5D0"/><rect x="47" y="95" width="59" height="3" rx="1" fill="#B8C5D0"/><rect x="47" y="101" width="60" height="3" rx="1" fill="#B8C5D0"/><rect x="47" y="107" width="63" height="3" rx="1" fill="#B8C5D0"/><rect x="47" y="113" width="56" height="3" rx="1" fill="#B8C5D0"/><rect x="47" y="119" width="49" height="3" rx="1" fill="#B8C5D0"/></svg>';
OrgChart.templates.GenericInterior.field_0 = `<foreignObject x="0" y="150" width="120" height="70"><p xmlns="http://www.w3.org/1999/xhtml">{val}</p></foreignObject>`;
OrgChart.templates.GenericInterior.field_2;
OrgChart.templates.GenericInterior.sourceUrl;

// '<text style="font-size: 14px;" fill="#454D58" x="60" y="170" text-anchor="middle">{val}</text>'
OrgChart.templates.GenericInterior.nodeMenuButton =
  '<g style="cursor:pointer;" transform="matrix(1,0,0,1,8,8)" control-node-menu-id="{id}">' +
  '<circle cx="0" cy="0" r="2" fill="#F6F8F9" stroke-width="1" stroke="#F6F8F9"></circle>' +
  '<circle cx="8" cy="0" r="2" fill="#F6F8F9" stroke-width="1" stroke="#F6F8F9"></circle>' +
  '<circle cx="16" cy="0" r="2" fill="#F6F8F9" stroke-width="1" stroke="#F6F8F9"></circle>' +
  '<rect x="-4" y="-15" fill="red" fill-opacity="0" width="22" height="22">' +
  '</rect>' +
  '</g>';
OrgChart.templates.GenericInterior.sourceUrl =
  '<g transform="matrix(0.075,0,0,0.075,90,-8)"><a target="_blank" xlink:href="{val}"><rect x="0" y="0" width="420" height="420" fill-opacity="0"></rect><g transform="matrix(1,0,0,1,40,40)"><path fill="#F6F8F9" d="M118.5,229.156c4.042,4.044,9.415,6.271,15.132,6.271c5.715,0,11.089-2.227,15.133-6.269l29.664-29.662 c4.09-4.093,6.162-9.442,6.24-14.816c5.601-0.078,10.857-2.283,14.829-6.253l29.66-29.662c4.042-4.043,6.269-9.417,6.269-15.133 c0-5.716-2.227-11.09-6.269-15.13l-9.806-9.806c-4.041-4.043-9.415-6.27-15.132-6.27c-5.716,0-11.09,2.227-15.132,6.269 l-29.663,29.662c-4.092,4.092-6.164,9.443-6.242,14.817c-5.601,0.078-10.857,2.283-14.828,6.252l-29.661,29.662 c-4.042,4.043-6.269,9.418-6.268,15.136c0,5.716,2.227,11.089,6.269,15.129L118.5,229.156z M168.618,147.548l29.662-29.661 c1.587-1.587,3.696-2.461,5.94-2.461c2.243,0,4.353,0.874,5.938,2.461l9.808,9.808c1.586,1.586,2.46,3.694,2.46,5.937 c0,2.244-0.874,4.354-2.462,5.941l-29.658,29.661c-1.588,1.587-3.697,2.46-5.941,2.46c-2.243,0-4.353-0.874-5.938-2.46 l-0.309-0.309l19.598-19.598c2.539-2.539,2.539-6.654,0-9.192c-2.537-2.538-6.654-2.538-9.191,0l-19.599,19.598l-0.308-0.308 C165.344,156.152,165.345,150.823,168.618,147.548z M117.888,198.28l29.66-29.661c1.587-1.586,3.695-2.46,5.939-2.46 c2.242,0,4.349,0.872,5.934,2.455c0.002,0.001,0.004,0.003,0.005,0.005l0.309,0.309l-19.598,19.598 c-2.539,2.538-2.539,6.653,0,9.191c1.269,1.27,2.933,1.904,4.596,1.904s3.327-0.635,4.596-1.904l19.599-19.598l0.309,0.309 c3.273,3.273,3.273,8.603,0,11.877l-29.662,29.66c-1.588,1.588-3.698,2.462-5.941,2.462c-2.243,0-4.352-0.874-5.938-2.462 l-9.807-9.806c-1.586-1.586-2.46-3.694-2.46-5.938C115.426,201.978,116.3,199.868,117.888,198.28z"/></g></a></g>';

OrgChart.templates.LandingPage = Object.assign(
  {},
  OrgChart.templates.GenericInterior
);
OrgChart.templates.InteriorLanding = Object.assign(
  {},
  OrgChart.templates.GenericInterior
);
OrgChart.templates.ProgramDetail = Object.assign(
  {},
  OrgChart.templates.GenericInterior
);
OrgChart.templates.ProgramDirectory = Object.assign(
  {},
  OrgChart.templates.GenericInterior
);
OrgChart.templates.NewsBlogPost = Object.assign(
  {},
  OrgChart.templates.GenericInterior
);
OrgChart.templates.NewsBlogDirectory = Object.assign(
  {},
  OrgChart.templates.GenericInterior
);
OrgChart.templates.AuthorPage = Object.assign(
  {},
  OrgChart.templates.GenericInterior
);
OrgChart.templates.Form = Object.assign({}, OrgChart.templates.GenericInterior);

OrgChart.templates.LandingPage.node =
  '<svg width="120" height="150" viewBox="0 0 120 150" fill="none" xmlns="http://www.w3.org/2000/svg"><rect width="120" height="150" rx="4" fill="#B8C5D0"/><path fill-rule="evenodd" clip-rule="evenodd" d="M8 16H112C114.209 16 116 17.7909 116 20V142C116 144.209 114.209 146 112 146H8C5.79086 146 4 144.209 4 142V20C4 17.7909 5.79086 16 8 16Z" fill="#F6F8F9"/><rect x="6" y="18" width="108" height="62" rx="4" fill="#89969F"/><rect x="6" y="82" width="108" height="62" rx="4" fill="#B8C5D0"/></svg>';

OrgChart.templates.InteriorLanding.node =
  '<svg width="120" height="150" viewBox="0 0 120 150" fill="none" xmlns="http://www.w3.org/2000/svg"><rect width="120" height="150" rx="4" fill="#B51A1A"/><path fill-rule="evenodd" clip-rule="evenodd" d="M8 16H112C114.209 16 116 17.7909 116 20V142C116 144.209 114.209 146 112 146H8C5.79086 146 4 144.209 4 142V20C4 17.7909 5.79086 16 8 16Z" fill="#F6F8F9"/><rect x="6" y="18" width="108" height="62" rx="4" fill="#89969F"/><path d="M60.5 62C67.4036 62 73 56.4036 73 49.5C73 42.5964 67.4036 37 60.5 37C53.5964 37 48 42.5964 48 49.5C48 56.4036 53.5964 62 60.5 62Z" fill="#B8C5D0"/><mask id="mask0" mask-type="alpha" maskUnits="userSpaceOnUse" x="48" y="37" width="25" height="25"><path d="M60.5 62C67.4036 62 73 56.4036 73 49.5C73 42.5964 67.4036 37 60.5 37C53.5964 37 48 42.5964 48 49.5C48 56.4036 53.5964 62 60.5 62Z" fill="white"/></mask><g mask="url(#mask0)"><path fill-rule="evenodd" clip-rule="evenodd" d="M60.5 57.5601C63.537 57.5601 66 59.0101 66 60.7901C66 62.5701 63.537 62.8601 60.5 62.8601C57.463 62.8601 55 62.5701 55 60.7901C55 59.0101 57.462 57.5601 60.5 57.5601ZM60.5 47.0001C62.4308 46.9512 64.1987 48.0771 64.971 49.8474C65.7433 51.6177 65.366 53.6794 64.0169 55.0614C62.6677 56.4435 60.6157 56.8704 58.8273 56.141C57.039 55.4117 55.8708 53.6715 55.873 51.7401C55.8578 50.4979 56.3368 49.3005 57.2046 48.4115C58.0723 47.5226 59.2578 47.0148 60.5 47.0001Z" fill="#89969F"/></g><path fill-rule="evenodd" clip-rule="evenodd" d="M100.489 56C99.8831 55.9986 99.3375 55.6329 99.106 55.0729C98.8746 54.5129 99.0028 53.8687 99.431 53.44L103.378 49.49L99.431 45.54C99.0191 45.169 98.8453 44.6011 98.9792 44.0631C99.1131 43.5251 99.5327 43.1049 100.07 42.9702C100.608 42.8356 101.176 43.0086 101.548 43.42L106.554 48.43C107.139 49.0156 107.139 49.9643 106.554 50.55L101.548 55.56C101.267 55.8411 100.886 55.9994 100.489 56V56Z" fill="#B8C5D0"/><path fill-rule="evenodd" clip-rule="evenodd" d="M19.511 56C20.1169 55.9986 20.6625 55.6329 20.894 55.0729C21.1254 54.5129 20.9972 53.8687 20.569 53.44L16.622 49.49L20.569 45.54C20.9809 45.169 21.1547 44.6011 21.0208 44.0631C20.8869 43.5251 20.4673 43.1049 19.9295 42.9702C19.3917 42.8356 18.8236 43.0086 18.452 43.42L13.446 48.43C12.8611 49.0156 12.8611 49.9643 13.446 50.55L18.452 55.56C18.7332 55.8406 19.1138 55.9987 19.511 56V56Z" fill="#B8C5D0"/><rect x="70" y="85" width="4" height="4" rx="1" fill="#B8C5D0"/><rect x="64" y="85" width="4" height="4" rx="1" fill="#B8C5D0"/><rect x="58" y="85" width="4" height="4" rx="1" fill="#B8C5D0"/><rect x="52" y="85" width="4" height="4" rx="1" fill="#B8C5D0"/><rect x="46" y="85" width="4" height="4" rx="1" fill="#89969F"/><rect x="34" y="98" width="52" height="3" rx="1" fill="#89969F"/><rect x="26" y="108" width="68" height="3" rx="1" fill="#B8C5D0"/><rect x="22" y="114" width="77" height="3" rx="1" fill="#B8C5D0"/><rect x="34" y="120" width="53" height="3" rx="1" fill="#B8C5D0"/></svg>';

OrgChart.templates.ProgramDetail.node =
  '<svg width="120" height="150" viewBox="0 0 120 150" fill="none" xmlns="http://www.w3.org/2000/svg"><rect width="120" height="150" rx="4" fill="#5224D5"/><path fill-rule="evenodd" clip-rule="evenodd" d="M8 16H112C114.209 16 116 17.7909 116 20V142C116 144.209 114.209 146 112 146H8C5.79086 146 4 144.209 4 142V20C4 17.7909 5.79086 16 8 16Z" fill="#F6F8F9"/><rect x="6" y="28" width="52" height="3" rx="1" fill="#89969F"/><rect x="6" y="37" width="35" height="34" rx="4" fill="#B8C5D0"/><mask id="mask0" mask-type="alpha" maskUnits="userSpaceOnUse" x="6" y="37" width="35" height="34"><rect x="6" y="37" width="35" height="34" rx="4" fill="white"/></mask><g mask="url(#mask0)"><path fill-rule="evenodd" clip-rule="evenodd" d="M6 71C6 71 16.05 41.41 26.47 71C26.47 71 33.35 57.78 41 71H6ZM29.11 54C30.1424 54.0481 30.9451 54.9157 30.9131 55.9487C30.881 56.9816 30.026 57.7978 28.9927 57.7818C27.9593 57.7658 27.13 56.9235 27.13 55.89C27.1418 55.3768 27.3571 54.8893 27.7284 54.5348C28.0998 54.1803 28.5968 53.988 29.11 54V54Z" fill="#89969F"/></g><rect x="47" y="38" width="67" height="3" rx="1" fill="#B8C5D0"/><rect x="47" y="44" width="55" height="3" rx="1" fill="#B8C5D0"/><rect x="47" y="50" width="47" height="3" rx="1" fill="#B8C5D0"/><rect x="47" y="56" width="64" height="3" rx="1" fill="#B8C5D0"/><rect x="47" y="62" width="67" height="3" rx="1" fill="#B8C5D0"/><rect x="47" y="68" width="53" height="3" rx="1" fill="#B8C5D0"/><rect x="6" y="74" width="108" height="3" rx="1" fill="#B8C5D0"/><rect x="6" y="80" width="105" height="3" rx="1" fill="#B8C5D0"/><rect x="6" y="86" width="108" height="3" rx="1" fill="#B8C5D0"/><rect x="6" y="92" width="102" height="3" rx="1" fill="#B8C5D0"/><rect x="6" y="98" width="106" height="3" rx="1" fill="#B8C5D0"/><rect x="6" y="104" width="107" height="3" rx="1" fill="#B8C5D0"/><rect x="6" y="110" width="103" height="3" rx="1" fill="#B8C5D0"/><rect x="6" y="116" width="108" height="3" rx="1" fill="#B8C5D0"/><rect x="6" y="122" width="108" height="3" rx="1" fill="#B8C5D0"/><rect x="6" y="128" width="67" height="3" rx="1" fill="#B8C5D0"/></svg>';

OrgChart.templates.ProgramDirectory.node =
  '<svg width="120" height="150" viewBox="0 0 120 150" fill="none" xmlns="http://www.w3.org/2000/svg"><rect width="120" height="150" rx="4" fill="#D0B8C9"/><path fill-rule="evenodd" clip-rule="evenodd" d="M8 16H112C114.209 16 116 17.7909 116 20V142C116 144.209 114.209 146 112 146H8C5.79086 146 4 144.209 4 142V20C4 17.7909 5.79086 16 8 16Z" fill="#F6F8F9"/><rect x="16" y="28" width="68" height="6" rx="1" fill="#B8C5D0"/><rect x="87" y="28" width="17" height="6" rx="1" fill="#89969F"/><rect x="6" y="46" width="6" height="3" rx="1" fill="#89969F"/><rect x="15" y="46" width="99" height="3" rx="1" fill="#B8C5D0"/><rect x="6" y="52" width="6" height="3" rx="1" fill="#89969F"/><rect x="15" y="52" width="69" height="3" rx="1" fill="#B8C5D0"/><rect x="6" y="58" width="6" height="3" rx="1" fill="#89969F"/><rect x="15" y="58" width="89" height="3" rx="1" fill="#B8C5D0"/><rect x="6" y="64" width="6" height="3" rx="1" fill="#89969F"/><rect x="15" y="64" width="79" height="3" rx="1" fill="#B8C5D0"/><rect x="6" y="70" width="6" height="3" rx="1" fill="#89969F"/><rect x="15" y="70" width="89" height="3" rx="1" fill="#B8C5D0"/><rect x="6" y="76" width="6" height="3" rx="1" fill="#89969F"/><rect x="15" y="76" width="96" height="3" rx="1" fill="#B8C5D0"/><rect x="6" y="82" width="6" height="3" rx="1" fill="#89969F"/><rect x="15" y="82" width="93" height="3" rx="1" fill="#B8C5D0"/><rect x="6" y="88" width="6" height="3" rx="1" fill="#89969F"/><rect x="15" y="88" width="49" height="3" rx="1" fill="#B8C5D0"/><rect x="6" y="94" width="6" height="3" rx="1" fill="#89969F"/><rect x="15" y="94" width="69" height="3" rx="1" fill="#B8C5D0"/><rect x="6" y="100" width="6" height="3" rx="1" fill="#89969F"/><rect x="15" y="100" width="96" height="3" rx="1" fill="#B8C5D0"/><rect x="6" y="106" width="6" height="3" rx="1" fill="#89969F"/><rect x="15" y="106" width="93" height="3" rx="1" fill="#B8C5D0"/><rect x="6" y="112" width="6" height="3" rx="1" fill="#89969F"/><rect x="15" y="112" width="49" height="3" rx="1" fill="#B8C5D0"/><rect x="6" y="118" width="6" height="3" rx="1" fill="#89969F"/><rect x="15" y="118" width="69" height="3" rx="1" fill="#B8C5D0"/><rect x="30" y="130" width="4" height="4" rx="1" fill="#B8C5D0"/><rect x="24" y="130" width="4" height="4" rx="1" fill="#B8C5D0"/><rect x="18" y="130" width="4" height="4" rx="1" fill="#B8C5D0"/><rect x="12" y="130" width="4" height="4" rx="1" fill="#B8C5D0"/><rect x="6" y="130" width="4" height="4" rx="1" fill="#89969F"/></svg>';

OrgChart.templates.NewsBlogPost.node =
  '<svg class="NewsBlogPost" width="120" height="150" viewBox="0 0 120 150" fill="none" xmlns="http://www.w3.org/2000/svg"><rect width="120" height="150" rx="4" fill="#E7E15A"/><path fill-rule="evenodd" clip-rule="evenodd" d="M8 16H112C114.209 16 116 17.7909 116 20V142C116 144.209 114.209 146 112 146H8C5.79086 146 4 144.209 4 142V20C4 17.7909 5.79086 16 8 16Z" fill="#F6F8F9"/><rect x="6" y="28" width="52" height="3" rx="1" fill="#89969F"/><rect x="6" y="37" width="35" height="34" rx="4" fill="#B8C5D0"/><mask id="mask0" mask-type="alpha" maskUnits="userSpaceOnUse" x="6" y="37" width="35" height="34"><rect x="6" y="37" width="35" height="34" rx="4" fill="white"/></mask><g mask="url(#mask0)"><path fill-rule="evenodd" clip-rule="evenodd" d="M6 71C6 71 16.05 41.41 26.47 71C26.47 71 33.35 57.78 41 71H6ZM29.11 54C30.1424 54.0481 30.9451 54.9157 30.9131 55.9487C30.881 56.9816 30.026 57.7978 28.9927 57.7818C27.9593 57.7658 27.13 56.9235 27.13 55.89C27.1418 55.3768 27.3571 54.8893 27.7284 54.5348C28.0998 54.1803 28.5968 53.988 29.11 54V54Z" fill="#89969F"/></g><rect x="47" y="38" width="67" height="3" rx="1" fill="#B8C5D0"/><rect x="47" y="44" width="55" height="3" rx="1" fill="#B8C5D0"/><rect x="47" y="50" width="47" height="3" rx="1" fill="#B8C5D0"/><rect x="47" y="56" width="64" height="3" rx="1" fill="#B8C5D0"/><rect x="47" y="62" width="67" height="3" rx="1" fill="#B8C5D0"/><rect x="47" y="68" width="53" height="3" rx="1" fill="#B8C5D0"/><rect x="6" y="74" width="108" height="3" rx="1" fill="#B8C5D0"/><rect x="6" y="80" width="105" height="3" rx="1" fill="#B8C5D0"/><rect x="6" y="86" width="108" height="3" rx="1" fill="#B8C5D0"/><rect x="6" y="92" width="102" height="3" rx="1" fill="#B8C5D0"/><rect x="6" y="98" width="106" height="3" rx="1" fill="#B8C5D0"/><rect x="6" y="104" width="107" height="3" rx="1" fill="#B8C5D0"/><rect x="6" y="110" width="103" height="3" rx="1" fill="#B8C5D0"/><rect x="6" y="116" width="108" height="3" rx="1" fill="#B8C5D0"/><rect x="6" y="122" width="108" height="3" rx="1" fill="#B8C5D0"/><rect x="6" y="128" width="67" height="3" rx="1" fill="#B8C5D0"/></svg>';

OrgChart.templates.NewsBlogDirectory.node =
  '<svg width="120" height="150" viewBox="0 0 120 150" fill="none" xmlns="http://www.w3.org/2000/svg"><rect width="120" height="150" rx="4" fill="#E717C5"/><path fill-rule="evenodd" clip-rule="evenodd" d="M8 16H112C114.209 16 116 17.7909 116 20V142C116 144.209 114.209 146 112 146H8C5.79086 146 4 144.209 4 142V20C4 17.7909 5.79086 16 8 16Z" fill="#F6F8F9"/><rect x="6" y="28" width="35" height="34" rx="4" fill="#B8C5D0"/><path fill-rule="evenodd" clip-rule="evenodd" d="M24 36C27.8847 36.0209 31.0177 39.1853 31 43.07C31 46.97 25.312 55 24 55C22.688 55 17 46.97 17 43.07C16.9823 39.1853 20.1154 36.0209 24 36ZM24 39.98C25.2523 39.9687 26.3876 40.7143 26.8747 41.868C27.3618 43.0217 27.1044 44.3553 26.2229 45.2449C25.3414 46.1344 24.0102 46.404 22.8521 45.9274C21.694 45.4508 20.9381 44.3223 20.938 43.07C20.9338 42.254 21.2541 41.4699 21.8285 40.8902C22.4028 40.3106 23.184 39.9832 24 39.98V39.98Z" fill="#89969F"/><rect x="47" y="30" width="32" height="3" rx="1" fill="#89969F"/><rect x="47" y="39" width="42" height="3" rx="1" fill="#B8C5D0"/><rect x="47" y="45" width="62" height="3" rx="1" fill="#B8C5D0"/><rect x="47" y="51" width="63" height="3" rx="1" fill="#B8C5D0"/><rect x="47" y="57" width="46" height="3" rx="1" fill="#B8C5D0"/><rect x="6" y="64" width="35" height="34" rx="4" fill="#B8C5D0"/><path fill-rule="evenodd" clip-rule="evenodd" d="M24 72C27.8847 72.0209 31.0177 75.1853 31 79.07C31 82.97 25.312 91 24 91C22.688 91 17 82.97 17 79.07C16.9823 75.1853 20.1154 72.0209 24 72V72ZM24 75.98C25.2523 75.9687 26.3876 76.7143 26.8747 77.868C27.3618 79.0217 27.1044 80.3553 26.2229 81.2449C25.3414 82.1344 24.0102 82.404 22.8521 81.9274C21.694 81.4508 20.9381 80.3223 20.938 79.07C20.9338 78.254 21.2541 77.4699 21.8285 76.8902C22.4028 76.3106 23.184 75.9832 24 75.98Z" fill="#89969F"/><rect x="47" y="66" width="42" height="3" rx="1" fill="#89969F"/><rect x="47" y="75" width="63" height="3" rx="1" fill="#B8C5D0"/><rect x="47" y="81" width="60" height="3" rx="1" fill="#B8C5D0"/><rect x="47" y="87" width="58" height="3" rx="1" fill="#B8C5D0"/><rect x="47" y="93" width="46" height="3" rx="1" fill="#B8C5D0"/><rect x="6" y="100" width="35" height="34" rx="4" fill="#B8C5D0"/><path fill-rule="evenodd" clip-rule="evenodd" d="M24 108C27.8847 108.021 31.0177 111.185 31 115.07C31 118.97 25.312 127 24 127C22.688 127 17 118.97 17 115.07C16.9823 111.185 20.1154 108.021 24 108V108ZM24 111.98C25.2523 111.969 26.3876 112.714 26.8747 113.868C27.3618 115.022 27.1044 116.355 26.2229 117.245C25.3414 118.134 24.0102 118.404 22.8521 117.927C21.694 117.451 20.9381 116.322 20.938 115.07C20.9338 114.254 21.2541 113.47 21.8285 112.89C22.4028 112.311 23.184 111.983 24 111.98V111.98Z" fill="#89969F"/><rect x="47" y="102" width="52" height="3" rx="1" fill="#89969F"/><rect x="47" y="111" width="32" height="3" rx="1" fill="#B8C5D0"/><rect x="47" y="117" width="55" height="3" rx="1" fill="#B8C5D0"/><rect x="47" y="123" width="59" height="3" rx="1" fill="#B8C5D0"/><rect x="47" y="129" width="41" height="3" rx="1" fill="#B8C5D0"/></svg>';

OrgChart.templates.AuthorPage.node =
  '<svg width="120" height="150" viewBox="0 0 120 150" fill="none" xmlns="http://www.w3.org/2000/svg"><rect width="120" height="150" rx="4" fill="#3AC550"/><path fill-rule="evenodd" clip-rule="evenodd" d="M8 16H112C114.209 16 116 17.7909 116 20V142C116 144.209 114.209 146 112 146H8C5.79086 146 4 144.209 4 142V20C4 17.7909 5.79086 16 8 16Z" fill="#F6F8F9"/><rect x="6" y="28" width="35" height="34" rx="4" fill="#B8C5D0"/><path fill-rule="evenodd" clip-rule="evenodd" d="M24 55.79C28.418 55.79 32 57.81 32 60.3C32 62.79 28.418 61.8 24 61.8C19.582 61.8 16 62.79 16 60.3C16 57.81 19.582 55.79 24 55.79ZM24 41C27.6559 41.049 30.5845 44.0439 30.5517 47.6999C30.519 51.356 27.5372 54.2979 23.8811 54.2814C20.2249 54.2649 17.2698 51.2962 17.27 47.64C17.2816 45.867 17.9973 44.1712 19.2595 42.9259C20.5217 41.6806 22.2269 40.9878 24 41Z" fill="#89969F"/><rect x="47" y="30" width="42" height="3" rx="1" fill="#89969F"/><rect x="47" y="39" width="65" height="3" rx="1" fill="#B8C5D0"/><rect x="47" y="45" width="63" height="3" rx="1" fill="#B8C5D0"/><rect x="47" y="51" width="64" height="3" rx="1" fill="#B8C5D0"/><rect x="47" y="57" width="57" height="3" rx="1" fill="#B8C5D0"/><rect x="6" y="65" width="108" height="3" rx="1" fill="#B8C5D0"/><rect x="6" y="71" width="108" height="3" rx="1" fill="#B8C5D0"/><rect x="6" y="77" width="108" height="3" rx="1" fill="#B8C5D0"/><rect x="6" y="83" width="108" height="3" rx="1" fill="#B8C5D0"/><rect x="6" y="89" width="108" height="3" rx="1" fill="#B8C5D0"/><rect x="6" y="95" width="108" height="3" rx="1" fill="#B8C5D0"/><rect x="6" y="101" width="108" height="3" rx="1" fill="#B8C5D0"/><rect x="6" y="107" width="108" height="3" rx="1" fill="#B8C5D0"/><rect x="6" y="113" width="108" height="3" rx="1" fill="#B8C5D0"/><rect x="6" y="119" width="108" height="3" rx="1" fill="#B8C5D0"/><rect x="6" y="125" width="108" height="3" rx="1" fill="#B8C5D0"/><rect x="6" y="131" width="108" height="3" rx="1" fill="#B8C5D0"/></svg>';

OrgChart.templates.Form.node =
  '<svg width="120" height="150" viewBox="0 0 120 150" fill="none" xmlns="http://www.w3.org/2000/svg"><rect width="120" height="150" rx="4" fill="#40454A"/><path fill-rule="evenodd" clip-rule="evenodd" d="M8 16H112C114.209 16 116 17.7909 116 20V142C116 144.209 114.209 146 112 146H8C5.79086 146 4 144.209 4 142V20C4 17.7909 5.79086 16 8 16Z" fill="#F6F8F9"/><rect x="19" y="39" width="82" height="6" rx="1" fill="#B8C5D0"/><rect x="19" y="48" width="82" height="6" rx="1" fill="#B8C5D0"/><rect x="19" y="57" width="82" height="6" rx="1" fill="#B8C5D0"/><rect x="19" y="66" width="82" height="6" rx="1" fill="#B8C5D0"/><rect x="19" y="75" width="82" height="38" rx="1" fill="#B8C5D0"/><rect x="79" y="116" width="22" height="7" rx="1" fill="#89969F"/></svg>';

export default class MyChart extends Component {
  constructor(props) {
    super(props);
    this.divRef = React.createRef();
  }

  shouldComponentUpdate() {
    return false;
  }

  componentDidMount() {
    console.log('this.propsssssssssss', this.props.nodes);
    this.chart = new OrgChart(this.divRef.current, {
      nodes: this.props.nodes,
      mouseScrool: OrgChart.action.scroll,
      showYScroll: OrgChart.scroll.visible,
      showXScroll: OrgChart.scroll.visible,
      levelSeparation: 50,
      siblingSeparation: 50,
      subtreeSeparation: 50,
      layout: OrgChart.tree,
      toolbar: {
        layout: true,
        zoom: true,
        fit: true,
        expandAll: false,
        fullScreen: true,
      },

      //   scaleInitial: 0.5,
      template: 'GenericInterior',

      tags: {
        'Generic Interior': {
          template: 'GenericInterior',
        },
        'Landing Page': {
          template: 'LandingPage',
        },
        'Interior Landing': {
          template: 'InteriorLanding',
        },
        'Program Detail': {
          template: 'ProgramDetail',
        },
        'Program Directory': {
          template: 'ProgramDirectory',
        },
        'News or Blog Post': {
          template: 'NewsBlogPost',
        },
        'News or Blog Directory': {
          template: 'NewsBlogDirectory',
        },
        'Author or Spotlight Page': {
          template: 'AuthorPage',
        },
        Form: {
          template: 'Form',
        },
      },

      enableDragDrop: true,
      nodeMenu: {
        details: { text: 'Details' },
        edit: { text: 'Edit' },
        add: { text: 'Add' },
        remove: { text: 'Remove' },
      },

      menu: {
        pdf: { text: 'Export PDF' },
        png: { text: 'Export PNG' },
        svg: { text: 'Export SVG' },
        csv: { text: 'Export CSV' },
      },

      nodeBinding: {
        field_0: 'name',
      },
    });
  }

  render() {
    return <div id="tree" ref={this.divRef}></div>;
  }
}
