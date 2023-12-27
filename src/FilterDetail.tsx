import React from "react";
import { Card, CardContent, CardHeader } from "@mui/material";
import "./App.scss";
import { FilterOption } from "./types";

interface FilterDetailProps {
  filter: FilterOption;
}

const FilterDetail: React.FC<FilterDetailProps> = ({ filter }) => {
  // Define content for different filter labels
  const contentMap: Record<
    string,
    {
      title: string;
      header: string;
      subheader: string;
      textBody: React.ReactNode;
    }
  > = {
    showall: {
      title: "Explore the MarvelVerse",
      header: "Interactive Network Graph",
      subheader:
        "The MarvelVerse is a way to engage with the history and social network of your favorite Marvel heroes.",
      textBody: (
        <>
          <p>
            <strong>
              <u>You cannot engage with all features on mobile</u>; we advise
              using a computer for the best user experience.
            </strong>
          </p>
          <p>
            The size of the character nodes shows how many connections they
            have! Larger = more connections.
          </p>
          <p>
            To get a closer look, you can double-click any of the characters to
            learn a bit more about them and who they know in the Marvel social
            network.
          </p>
          <p>
            To learn more about the major hero teams in Marvel, click a filter
            in the bottom navigation and see major characters in the series.
            These display characters based on how well they know each other
            within each team.
          </p>
          <p>
            We recommend looking at the timeline as well to see more history
            about the teams.
          </p>
        </>
      ),
    },
    avengers: {
      title: "Explore the MarvelVerse",
      header: "The Avengers",
      subheader: "Assembling Heroes Since 1963",
      textBody: (
        <>
          <p>
            Originally composed of Iron Man, Thor, Hulk, Ant-Man, and Wasp, the
            team has grown to include many iconic Marvel characters over the
            years.
          </p>
          <p>
            Known for their epic battles against powerful foes, the Avengers
            stand as Earth's mightiest heroes.
          </p>
        </>
      ),
    },
    spiderman: {
      title: "Explore the MarvelVerse",
      header: "Spider-Man",
      subheader: "Swinging Since 1962",
      textBody: (
        <>
          <p>
            Peter Parker, a high school student bitten by a radioactive spider,
            balances the challenges of life and crime-fighting.
          </p>
          <p>
            With his iconic red and blue suit, Spider-Man has become one of
            Marvel's most beloved characters.
          </p>
        </>
      ),
    },
    xmen: {
      title: "Explore the MarvelVerse",
      header: "X-Men",
      subheader: "Evolution Since 1963",
      textBody: (
        <>
          <p>
            Led by Professor Charles Xavier, they seek to coexist with humans
            while protecting a world that fears them.
          </p>
          <p>
            The X-Men's dynamic stories explore themes of prejudice, identity,
            and acceptance.
          </p>
        </>
      ),
    },
    fantasticfour: {
      title: "Explore the MarvelVerse",
      header: "Fantastic Four",
      subheader: "The World's Greatest Since 1961",
      textBody: (
        <>
          <p>
            Endowed with unique powers after a space mission gone wrong, they
            explore the unknown and face cosmic threats.
          </p>
          <p>The Fantastic Four is Marvel's first superhero team.</p>
        </>
      ),
    },
    midnightsons: {
      title: "Explore the MarvelVerse",
      header: "Midnight Sons",
      subheader: "Dark Forces Since 1992",
      textBody: (
        <>
          <p>
            Comprising characters like Ghost Rider, Blade, and Morbius, they
            battle dark forces that lurk in the shadows.
          </p>
          <p>
            The Midnight Sons bring a supernatural edge to the Marvel Universe.
          </p>
        </>
      ),
    },
    defenders: {
      title: "Explore the MarvelVerse",
      header: "The Defenders",
      subheader: "Protecting Reality Since 1971",
      textBody: (
        <>
          <p>
            With ever-changing members, including Doctor Strange, Hulk, and
            Silver Surfer, the Defenders protect reality from magical and cosmic
            threats.
          </p>
          <p>
            Their stories often delve into the supernatural and cosmic aspects
            of the Marvel Universe.
          </p>
        </>
      ),
    },
  };

  // Determine the content based on the filter label or default to welcome
  const filterKey = filter?.label.toLowerCase().replace(/[\s-]/g, "");
  console.log(filterKey);
  const { title, header, subheader, textBody } =
    contentMap[filterKey] || contentMap.showall;

  return (
    <div className="social-container">
      <Card className="MuiCard-root">
        <div className="social-heading">
          <h2 className="social-title">{title}</h2>
        </div>
        <CardHeader title={header} subheader={subheader} />
        <CardContent>
          <div className="social-body">{textBody}</div>
        </CardContent>
      </Card>
    </div>
  );
};

export default FilterDetail;
