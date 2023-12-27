## Comic series Marvel has published over time.

### Design Rationale

Our objective was to create an interactive visualization of Marvel Comics' enduring publications, showcasing their iconic characters since the beginning of the "Marvel Age" in 1961. This era, marked by Fantastic Four #1, is pivotal in establishing the Marvel Universe. On the landing page, we present the publication timeline grouped by significant Marvel "key properties" such as teams or characters. Utilizing cluster visualization, we provide an overview of team groupings, allowing viewers to analyze historical trends in comic titles featuring specific teams. Users can choose a team for a detailed view, where dot visualization offers in-depth information on hover.

### Data Filtering

Handling a dataset of over 47,000 comics published by Marvel since 1939 presented a challenge. We refined the dataset by removing broken entries and filtering out comic series lasting less than 5 years, focusing on approximately 12,000 comics. Manual grouping into major categories enhanced the visualization's focus on long-lasting series with a substantial role in the Marvel Universe. Grouping based on well-known teams and characters increased relevance and engagement. The visualization commences from 1961, aligning with the "Marvel Age" as explained in our design rationale.

### Development Process/Group Members' Roles

#### Lee
- Established the base of the MarvelVerse website, including header, footer, and screen filter buttons.
- Implemented filtering algorithms for grouping and filtering publications.
- Customized colors and components for recognition and interest.

#### Christoph
- Co-developed the compelling question and design rationale based on Marvel Comics knowledge.
- Conducted data cleaning and removal of bad or unusable data.
- Constructed grouping data and identified fundamental filtering keys.

#### Patrick
- Built the "Show All" timeline view, serving as the foundation for all timeline implementations.
- Studied and examined the react-svg-timeline for theme customization.

The development process involved setting up the GUI interface, managing the dataset, identifying a suitable visualization package, implementing and customizing it, and optimizing the dataset. The most time-consuming aspects included GUI development, dataset optimization, and implementation and customization of the visualization package.

## Marvel Hero's Social Network

### Design Rationale

Our primary goal was to present a dual perspective of the Marvel Social Network through distinct graph visualizations. One graph, employing modularity, highlighted the interconnectedness of hero teams and their relationships with other teams. In contrast, the second graph offered a more focused view, illustrating the interactions and relationships among the individual members within a hero team.

To enhance user understanding, we strategically employed color-coding in our modularity graph. Each major hero team was assigned a specific color, aligning with our filter buttons. This allowed users to delve deeper into specific teams by matching the colors. Furthermore, we leveraged color saturation and node size in the team relation graphs to depict the strength of connections associated with each node.

In addition to these graphical representations, we aimed to narrate the Marvel universe's storyline as users interacted with the network. Introducing a sidebar, we provided concise information about each team, showcasing its formation over time as displayed in the timeline. Double-clicking on a hero allowed users to explore detailed insights into the hero's story and significance within the Marvel universe. For each character, users could discover the number of comics they appeared in, the count of their connections (other known characters), and the frequency of their interactions with other characters during encounters.

For a more interactive experience, we implemented a dropdown menu enabling users to explore the connections of a selected character. This dynamic feature allowed users to seamlessly navigate through various heroes and explore details about their connections.

### Data Filtering

The social network dataset had nearly 100k character to comic connections. The input data is sourced from the Marvel Social Network dataset, as outlined in the paper [How the Avengers Assembled? Analysis of Marvel Hero Social Network](https://arxiv.org/abs/2109.12900) by Chongyang Shi, Xuan Yu, and Ziyang Ren (2021). Originally we obtained the dataset in a class to develop a Depth First Search algorithm and also explore Dijkstra's algorithm, finding how closely related one hero is to another. Christoph and Lee found this process fascinating, and chose to dive in further. This time Lee created their own way of filtering the dataset and creating weights to build fully original visual networks that displayed this data. This dataset created 6,417 unique nodes, and 166,827 edges. Just as before, manual grouping into major categories enhanced the visualization's focus on long-lasting hero teams with a substantial role in the Marvel Universe. Detailed below is the process Lee built to create the Nodes and Edges needed for the graphs:

#### Filtering Criteria:
- The filtering process is based on a list of "selected sources," which can be either all data sources or specific hero teams. Christoph identifies these hero teams.

#### Filtering Process (`filter_and_create_csv` function):
1. **Read Input CSV:**
   - The script reads the input CSV file, assuming it has columns named 'source' and 'target,' representing connections between characters and comics.

2. **Apply Filtering:**
   - Rows are filtered based on the list of selected sources. If all data sources are chosen, no filtering is applied, and the entire dataset is considered.

3. **Create Nodes and Edges CSV Files:**
   - Two new CSV files are created: one for nodes and another for edges.
   
4. **Calculate Node Sizes:**
   - Node sizes are calculated based on the co-appearances of characters in the same comic.

5. **Write to Nodes CSV:**
   - The unique characters and their corresponding sizes are written to the nodes CSV file.

6. **Write to Edges CSV:**
   - Edges between characters (excluding self-loops) along with edge weights are written to the edges CSV file.

#### Alternative Filtering (`selected_sources` List):
- If the goal is to create graph data for a specific hero team (identified by Christoph), the `selected_sources` list should contain the names of characters associated with that team.
- The filtering process ensures that only connections involving the selected hero team are included in the final graph.

#### Result:
- The output consists of two CSV files representing nodes and edges of the network graph.
- The nodes file contains information about characters and their sizes.
- The edges file contains information about connections between characters, including edge weights.

This process allows for the extraction of relevant data for building a network graph based on specified filtering criteria. You can read the code in [filtering.py](/filtering.py), where you can also see the function used on the nodes.JSON provided when extracting our visual graph from Gephi to properly render our edge visuals using the Sigma.js library.

### Development Process/Group Members' Roles

#### Lee
- Filtered the data for Gephi, facilitating graph visualizations and creating edge weights.
- Designed graphs in Gephi using radial axis layout with modularity and Force Atlas 2 layout with customized edge weights.
- Exported visualizations with Sigma.js template and restructured edges.json for React.ts rendition.
- Developed React.ts components, including a graph renderer, sidebar, and header for improved interaction.

#### Christoph
- Defined hero teams by manual character selection.
- Enhanced character profiles with images and descriptions.
- Contributed to documentation and demonstrated functionality through a comprehensive video.

#### Patrick
- Studied and examined sigma.js-react library documentation for the graph visualization, relaying this for Lee for further development.
- Improved graph label visualization.
- Implemented a drag and drop functionality for better user engagement.

The collaborative development process included data preparation, graph visualization design, React.ts component implementation, and user interaction enhancements. Efforts were focused on filtering and structuring the data, defining hero teams, and optimizing visualizations. Key contributions involved Gephi-based graph design, character profiling, and React.ts component development. The project successfully integrated diverse roles to create interactive Marvel social network visualizations.
