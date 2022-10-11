import * as React from 'react';
import { PageSection } from '@patternfly/react-core';
import { Grid, GridItem } from '@patternfly/react-core';
import { Card, TextContent, Text, TextVariants, TextList} from '@patternfly/react-core';
import m1 from '@app/bgimages/m1.jpg';
import '@app/About/About.css';

const About: React.FunctionComponent = () => (
  <PageSection className='wall-paper'>
    <Grid>
     <GridItem span={2}>
     <Card isCompact>
        <img alt="M1" src={m1}></img>
        <div className="fa">
          <a href="https://github.com/marciamoss" className="fs fc" target="blank">Github <br/> </a>
          <a href="https://www.linkedin.com/in/marcia-moss-056200175/" className="fs fc" target="blank">Linkedin <br/> </a>
          <a href="https://drive.google.com/file/d/1ERFy6G5E91GW17JH_49wmkZb0_UrJ3Wa/view?usp=sharing" className="fs fc" target="blank">Resume</a>
        </div>
      </Card>
    </GridItem>
    <GridItem span={1}></GridItem>
    <GridItem span={6}>
      <TextContent className="fc" >
        <Text component={TextVariants.blockquote} className="fc">
          <b><em>Maya Angelou perfectly sums up the way I work in her quote, "Do the best you can until you know better.
          Then when you know better, do better."</em></b>
        </Text>
        <Text component={TextVariants.p}>
          I’m a full stack developer who is always striving for excellence and growth.
          I specialize in JavaScript technologies across the MERN & MEAN stack (Mongo DB, Express.js, React.js, Angular and Node.js).
          With experience in crafting clean front-ends and functional back-end API systems, I love to spend my time coding and,
          due to my work ethic and focus, am known to deliver on time.
        </Text>
        <Text component={TextVariants.p}>
            As a lifelong learner that is always looking to stay on top of leading technologies, I graduated from University of North Carolina’s
            MERN Development Boot Camp and Farleigh Dickinson University with a Master in Computer Science.
            As a result, I am savvy enough to build your next application from scratch, yet sophisticated enough to have developed Fortune 100 solutions.
        </Text>
        <Text component={TextVariants.h5}>Education:
          <TextList>Full stack web development from UNC at Chapel Hill, NC<br/><em>2018-2019</em><br/></TextList>
          <TextList>M.S. Computer Science, FDU, Teaneck NJ<br/><em>2001-2003</em><br/></TextList>
        </Text>
        <Text component={TextVariants.h5}>Skills:
          <TextList>Languages: JavaScript, Typescript, HTML, CSS<br/>
            Frameworks: Node.js, Express, Angular, React.js <br/>
            Database Tools: SQL, Sequelize, PostgresSQL, Firebase, MongoDB, CouchDB<br/>
            Other: Git/Github, jQuery, Bootstrap, Handlebars<br/>
            SAS Certified Advanced Programmer for SAS 9 <em>(05JUL2017)</em><br/>
            SAS Certified Base Programmer for SAS 9 <em>(15FEB2017)</em>
          </TextList>
        </Text>
      </TextContent>
    </GridItem>
  </Grid>
  </PageSection>
)

export { About };
