/**
 * Copyright (c) 2017-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

const React = require('react');

const CompLibrary = require('../../core/CompLibrary.js');

const Container = CompLibrary.Container;
const GridBlock = CompLibrary.GridBlock;

function Help(props) {
  const { config: siteConfig, language = '' } = props;
  const { baseUrl, docsUrl } = siteConfig;
  const docsPart = `${docsUrl ? `${docsUrl}/` : ''}`;
  const langPart = `${language ? `${language}/` : ''}`;
  const docUrl = doc => `${baseUrl}${docsPart}${langPart}${doc}`;

  const supportLinks = [
    {
      content: `We help companies use agile+critical+adaptive futuristic thinking to build solid customer-centred profitable organisations.
${
        ''}`,
      title: 'Company Overview',
    },
    {
      content: 'We offer brand consulting, outsourcing of technology services and solutions to organizations, individual brands, startups & SMEs.',
      title: 'What we offer',
    },
    {
      content: "On-going support when you need it most. Email us at team@business-hustle.co",
      title: 'Contact Us',
    },
  ];

  return (
    <div className="docMainWrapper wrapper">
      <Container className="mainContainer documentContainer postContainer">
        <div className="post">
          <header className="postHeader">
            <h1>Business Hustle Ltd</h1>
          </header>
          <p> Business Hustle Ltd is a trademark of Simple eternity holdings (PTY) LTD a company registered and incorporated in the Republic of South Africa.</p>
          <GridBlock contents={supportLinks} layout="threeColumn" />
        </div>
      </Container>
    </div>
  );
}

module.exports = Help;
