import React, { useEffect, useState } from "react";
import ReactPDF, {
  Page,
  Text,
  View,
  Document,
  StyleSheet,
  PDFViewer,
  Image,
  Font,
  Link
} from "@react-pdf/renderer";

import {
  SectionHeader,
  Headline,
  Head,
  ExperienceItem,
  Box,
  colors,
  TimelineItem,
  Paragraph,
  EducationItem,
  periodToString,
  Tag
} from "./elements";

// import resolveConfig from "tailwindcss/resolveConfig";

// import localConfig from "../../tailwind.config";

// const { theme } = resolveConfig(localConfig);

import resume from "./resume.json";

const sortedCategories = resume.skills.map(c => {
  const nk = c.keywords
    .map(k => {
      return {
        name: k,
        // score is currently not used due to lack of experience
        score: resume.work || 0
      };
    })
    // sort skills alphabetically
    .sort((a, b) => a.name.localeCompare(b.name));
  return {
    ...c,
    keywords: nk
  };
});

// import { Andri } from "./pictures";
// import { durationForSkill } from "./skills";

const CVFrontpage = ({ image }) => (
  <Page size="A4" style={styles.page}>
      <View
        style={{
          // marginTop: 5,
          paddingVertical: 10,
          borderTop: 0.5,
          borderBottom: 0.5,
          borderColor: "#d3d3d3",
          backgroundColor: "black"
        }}
      >
        <Text
          style={{
            fontStyle: "italic",
            fontSize: 12,
            textAlign: "center",
            color: "white"
          }}
        >
          {resume.basics.summary}
        </Text>
      </View>

    <View
      style={{
        flexDirection: "row"
      }}
    >
      <View style={styles.left}>
        <Box title="Education">
          {resume.education.map(e => (
            <EducationItem
              key={`${e.institution + e.startDate}`}
              institution={e.institution}
              area={e.area}
              period={periodToString(e.startDate, e.endDate)}
              studyType={e.studyType}
              awards={e.awards}
            />
          ))}
        </Box>
        <View>
          <SectionHeader>Experience</SectionHeader>
          {resume.work.slice(0, 100).map((w, idx) => (
            <TimelineItem
              idx={idx}
              key={`${w.company + w.startDate}`}
              title={w.position}
              employer={w.company}
              period={periodToString(w.startDate, w.endDate)}
              tags={w.skills}
              skills={resume.skills}
            >
            {w.summary.map(e => (
                <View key={e} wrap={true} style={{marginBottom: 3, flexDirection: "row"}} >
                  <View style={{width: "2%"}}><Text style={{"color": "#2B6CB0"}}>•</Text></View>
                  <View style={{width: "98%"}}>
                    <Text key={e} style={{ color: "#2B6CB0", fontSize: 10}}>{e}</Text>
                  </View>
                </View>
            ))}
            </TimelineItem> )
          )}
        </View>
        <View style={{marginTop: 10}}>
            <Box title="Skill Summary">
              {resume.skillsummary.map(e => (
                <View key={e} wrap={true} style={{marginTop: 3, flexDirection: "row"}} >
                  <View style={{width: "2%"}}><Text>•</Text></View>
                  <View style={{width: "98%"}}>
                     <Text>{e}</Text>
                  </View>
                </View>
              ))}
            </Box>
        </View>
        {/* <View style={{marginTop: 10}}>
          <Box title="About">
            <Paragraph>
              I come from Shanghai and am the oldest of 3 siblings. In
              2006 I moved to Sydney to study. Since then I love this city 
              so I stayed to pursue my doctoral degree in engineering. 
              Realizing that I am addicted to coding and enjoy the 
              rewards when addressing the challenges, I decided to select web developer 
              as my career.
              In my off-time I like to cook, take
              photos and go for walks.
            </Paragraph>
            <Paragraph>
              I've been fascinated by computers since young and spend much of my
              free time, learning more about them.
            </Paragraph>
          </Box>
        </View> */}
        <View style={{marginTop: 10}}>
          <Box title="Reference">
            {resume.referees.map(e => (
              <View key={e}>
                <Text>{e.name}</Text>
                <Text>{e.title}</Text>
                <Text>{e.contact}</Text>
              </View>
            ))}
          </Box>
        </View>
      </View>

      <View wrap={true} style={styles.right}>
      <View
        style={{
          // marginLeft: 40
          alignItems: "left"
        }}
      >
        {/* <Head src={image} /> */}
        <Text style={{ fontSize: 20, fontWeight: "semibold" }}>
        Minwei Yao
        </Text>
        <Text style={{ fontSize: 12 }}>Software Engineer</Text>
        <Link src="minwei.surge.sh">Personal site</Link>
        <Link src="https://github.com/minwyy">Github link</Link>
        <Link src="https://www.linkedin.com/in/minwei-yao-6b23bb30/">Linkedin link</Link>
      </View>
        <View style={{marginTop: 10}}>
          <Text>Nationality: Australian</Text>
        </View>
        <View style={{marginTop: 25}}>
        <Box title="Skills">
          {/* <Text style={{ color: "grey", fontSize: 8, marginTop: -5 }}>
            Ordered by experience
          </Text> */}
          {sortedCategories.map(s => (
            <View key={s.name} wrap={true} style={{ marginTop: 10 }}>
              <Text style={{ fontWeight: "bold", color: s.color }} key={s.name}>
                {s.name}
              </Text>
              <View
                style={{ flexWrap: "wrap", flexDirection: "row", marginTop: 5 }}
              >
                {s.keywords &&
                  s.keywords.map(kw => (
                    <Tag
                      key={kw.name}
                      color={s.color}
                      //badgeText={kw.score > 0 && `${kw.score}y`}
                    >
                      {kw.name}
                    </Tag>
                  ))}
              </View>
            </View>
          ))}
        </Box>
        </View>
        <Box title="Languages">
        {resume.languages.map(lg => (
            <View key={lg.language}
             style={{
               flexDirection: "row"
             }}
            >
                <Tag color="blue">
                    <Text>{lg.language} ({lg.fluency})</Text>
                 </Tag>
            </View>
        ))}
        </Box>

        <Box title="Contact">
          <View>
            <Text style={{marginBottom: 3}}>Address: 37/56 Powell St, Homebush NSW</Text>
            <Text style={{marginBottom: 3}}>Mobile: {resume.basics.mobile}</Text>
            <Text style={{marginBottom: 3}}>Email: </Text>
            <Link style={{marginBottom: 3}} src="mailto:minwei.yao42@gmail.com">
              <Text>{resume.basics.email}</Text>
            </Link>
          </View>
        </Box>
      </View>
    </View>
    <View fixed style={styles.footer}>
      <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
        <Text>{resume.basics.name}</Text>

        <Text>{resume.basics.email}</Text>
        <Text
          fixed
          render={({ pageNumber, totalPages }) =>
            `${pageNumber} / ${totalPages}`
          }
        />
      </View>
    </View>
  </Page>
);

// Create Document Component
export const CVDoc = ({ image }) => (
  <Document>
    <CVFrontpage image={image} />
  </Document>
);

// Create styles
const styles = StyleSheet.create({
  page: {
    //paddingVertical: 30,
    position: "relative",
    paddingTop: 20,
    paddingBottom: 40,
    paddingHorizontal: 30,
    //marginHorizontal: 30,
    fontSize: 10,
    // color: theme.colors.gray[900],
    fontFamily: "DefaultFont"
  },
  leftHeader: {
    alignItems: "center",
    paddingBottom: 20
  },
  top: {
    flexDirection: "row",
    alignItems: "center"
  },
  left: {
    width: "70%",
    marginTop: 20,
    paddingRight: 10
    //flex: 1,
  },
  right: {
    marginTop: 20,
    paddingLeft: 10,
    width: "30%",
    //flex: 1
  },
  footer: {
    marginHorizontal: 10,
    borderTopColor: "#d3d3d3",
    borderTopWidth: 0.5,
    paddingVertical: 10,
    width: "100%",
    position: "absolute",
    bottom: 20,
    left: 20
  }
});