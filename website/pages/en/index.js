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

    // const Logo = props => (
    //   <div className="projectLogo">
    //     <img src={props.img_src} alt="Project Logo" />
    //   </div>
    // );

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
        {/* <Logo img_src={`${baseUrl}img/logo.svg`} /> */}
        <div className="inner">
          <ProjectTitle siteConfig={siteConfig} />
          <PromoSection>
            <Button href={docUrl('getting-started')}>Getting Started</Button>
            <Button href="https://github.com/clay" target="_blank">View On Github</Button>
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
        <Container padding={['bottom', 'top']} background="light">
            <GridBlock
              align="center"
              contents={[
                {
                  content: `Everything is JSON in Clay and can be quickly retrieved using simple REST API powered by a Node.js and Express`,
                  // image: `${siteConfig.baseUrl}img/markdown.png`,
                  // imageAlign: 'top',
                  // imageAlt: 'TBD',
                  title: 'Simple REST API',
                },
                {
                  content: `Components in Clay are simple JSON objects which can be distributed into any format (RSS, Apple News, AMP, etc.) plug and play renderers`,
                  // image: `${siteConfig.baseUrl}img/react.svg`,
                  // imageAlign: 'top',
                  // imageAlt: 'TBD',
                  title: 'Render Into Any Format',
                },
                {
                  content: `Build plugins (or use what the community provides) to make the editing experience match your needs`,
                  // image: `${siteConfig.baseUrl}img/translation.svg`,
                  // imageAlign: 'top',
                  // imageAlt: 'TBD',
                  title: 'Plugin Support',
                },
              ]}
              layout="threeColumn"
            />
          </Container>
          <Container padding={['bottom', 'top']} background="light">
            <GridBlock
              align="center"
              contents={[
                {
                  content: `Clay has _zero_ assumptions about your content, everything is just a component. YOU give your components meaning that match your needs rather than forcing your content into a content type`,
                  // image: `${siteConfig.baseUrl}img/markdown.png`,
                  // imageAlign: 'top',
                  // imageAlt: 'TBD',
                  title: 'No Assumed Content Model',
                },
                {
                  content: `Clay is designed to support multiple sites in a single instance meaning your components can be shared and re-used across sites within the same codebase`,
                  // image: `${siteConfig.baseUrl}img/react.svg`,
                  // imageAlign: 'top',
                  // imageAlt: 'TBD',
                  title: 'Run One Site Or Dozens',
                }
              ]}
              layout="twoColumn"
            />
          </Container>
          <Container padding={['bottom', 'top']}>
            <GridBlock
              contents={[
                {
                  content: `Leave long forms in the past and edit your content on the same page it lives. Clay's editing experience allows users to preview their changes as they happen and to know how the page will look without switching to another view.`,
                  imageAlign: 'right',
                  image: `${siteConfig.baseUrl}img/homepage-edit-example.gif`,
                  imageAlt: 'Example of the edit experience',
                  title: 'Inline Editing Experience',
                },
              ]}
              layout="twoColumn"
            />
          </Container>
          <Container padding={['bottom', 'top']} background="light">
            <GridBlock
              contents={[
                {
                  content: `Want to give Clay a try? We have a very simple [starter example that can be found here](https://github.com/clay/clay-starter).</br>All of the components are free to use in your own project and more will be added as the platform expands.`,
                  title: 'Easy To Get Started',
                }, {
                  content: `Have an issue you want to be addressed? Submit an [issue in this repo](https://github.com/clay/clay/issues)</br>and we'll help you find the solution.`,
                  title: 'Dedicated To Open Source',
                }
              ]}
              layout="twoColumn"
              align="center"
            />
          </Container>
        </div>
      </div>
    );
  }
}

module.exports = Index;
