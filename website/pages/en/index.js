/**
 * Copyright (c) 2017-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

const React = require('react');

const CompLibrary = require('../../core/CompLibrary.js');

const MarkdownBlock = CompLibrary.MarkdownBlock; /* Used to read markdown */
const Container = CompLibrary.Container;
const GridBlock = CompLibrary.GridBlock;

class HomeSplash extends React.Component {
  render() {
    const {siteConfig, language = ''} = this.props;
    const {baseUrl, docsUrl} = siteConfig;
    const docsPart = `${docsUrl ? `${docsUrl}/` : ''}`;
    const langPart = `${language ? `${language}/` : ''}`;
    const docUrl = doc => `${baseUrl}${docsPart}${langPart}${doc}`;

    const SplashContainer = props => (
      <div className="homeContainer">
        <div className="homeSplashFade">
          <div className="wrapper homeWrapper">{props.children}</div>
        </div>
      </div>
    );

    const Logo = props => (
      <div className="projectLogo">
        <img src={props.img_src} alt="Project Logo" />
      </div>
    );

    const ProjectTitle = () => (
      <h2 className="projectTitle">
        {siteConfig.title}
        <small>{siteConfig.tagline}</small>
      </h2>
    );

    const PromoSection = props => (
      <div className="section promoSection">
        <div className="promoRow">
          <div className="pluginRowBlock">{props.children}</div>
        </div>
      </div>
    );

    const Button = props => (
      <div className="pluginWrapper buttonWrapper">
        <a className="button" href={props.href} target={props.target}>
          {props.children}
        </a>
      </div>
    );

    return (
      <SplashContainer>
        <Logo img_src={`${baseUrl}img/logo.svg`} />
        <div className="inner">
          <ProjectTitle siteConfig={siteConfig} />
          <PromoSection>
            <Button href={docUrl('components.html')}>Components</Button>
            <Button href={docUrl('pages.html')}>Pages</Button>
            <Button href={docUrl('layouts.html')}>Layouts</Button>
            <Button href={docUrl('uris.html')}>Uris</Button>
            <Button href={docUrl('lists.html')}>Lists</Button>
            <Button href={docUrl('users.html')}>Users</Button>
          </PromoSection>
        </div>
      </SplashContainer>
    );
  }
}

class Index extends React.Component {
  render() {
    const {config: siteConfig, language = ''} = this.props;
    const {baseUrl} = siteConfig;

    const Block = props => (
      <Container
        padding={['bottom', 'top']}
        id={props.id}
        background={props.background}>
        <GridBlock
          align="center"
          contents={props.children}
          layout={props.layout}
        />
      </Container>
    );

    return (
      <div>
        <HomeSplash siteConfig={siteConfig} language={language} />
        <div className="mainContainer">
          <Container padding={['right', 'left']}>
            <div className="mainContent">
              <MarkdownBlock>
                Clay is an open-source CMS created by [New York Media](http://mediakit.nymag.com/) powering [New York Magazine](http://nymag.com/), 
                [Vulture](https://www.vulture.com/), [The Cut](https://www.thecut.com/), [Grub Street](http://www.grubstreet.com/) and [Slate](https://slate.com/).
              </MarkdownBlock>
            </div>
            <div className="mainContent">
              <MarkdownBlock>
                Clay is comprised of modules available on npm, but the core system is comprised of [Kiln](https://claycms.gitbook.io/kiln); the editing
                interface; and [Amphora](https://claycms.gitbook.io/amphora); the REST API.
              </MarkdownBlock>
            </div>
            <div className="mainContent">
              <MarkdownBlock>
                The documentation in this space is meant to explain core concepts of Clay,
                for a deeper technical dive, you can explore the documentation of each of the modules themselves.
              </MarkdownBlock>
            </div>
          </Container>
        </div>
      </div>
    );
  }
}

module.exports = Index;
