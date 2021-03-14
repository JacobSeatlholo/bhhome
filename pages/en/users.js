/**
 * Copyright (c) 2017-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

const React = require('react');

const CompLibrary = require('../../core/CompLibrary.js');

const Container = CompLibrary.Container;

class Users extends React.Component {
  render() {
    const { config: siteConfig } = this.props;
    if ((siteConfig.users || []).length === 0) {
      return null;
    }

    const editUrl = `${siteConfig.repoUrl}/edit/master/website/siteConfig.js`;
    const showcase = siteConfig.users.map(user => (
      <a href={user.infoLink} key={user.infoLink}>
        <img src={user.image} alt={user.caption} title={user.caption} />
      </a>
    ));

    return (
      <div className="mainContainer">
        <Container padding={['bottom', 'top']}>
          <div className="showcaseSection">
            <div className="prose">
              <h1>What is Universal Accessibiity?</h1>
              <p>People with disabilities should be able to perceive, understand, navigate, and interact with, and contribute to your website.</p>
            </div>
            <div className="logos">{showcase}</div>
            <p>Just as web accessibility and SEO are linked, so too are web accessibility and usability.If you’re ready to launch a full accessibility initiative or have questions, you can reach out to our team of experts for a free 30-minute consultation about your next steps. Email : team@business-hustle.co</p>
            <a href={"https://uahub.org.za"} className="button">
              Visit UA Hub
            </a> 
          </div>
        </Container>
      </div>
    );
  }
}

module.exports = Users;
