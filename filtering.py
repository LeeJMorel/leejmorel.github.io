import csv
from collections import defaultdict

import csv
import json

def generate_edges_json(nodes_json, edges_csv, output_json):
    # Read nodes JSON
    with open(nodes_json, 'r') as nodes_file:
        nodes_data = json.load(nodes_file)

    # Create a mapping from node label to node ID
    label_to_id = {node['label']: node['id'] for node in nodes_data['nodes']}

    # Read edges CSV
    edges_list = []
    edge_id_counter = 1  # Counter for assigning unique IDs to edges

    with open(edges_csv, 'r', newline='', encoding='utf-8') as csvfile:
        reader = csv.DictReader(csvfile)
        for row in reader:
            source_label = row['Source']
            target_label = row['Target']
            source_id = label_to_id.get(source_label)
            target_id = label_to_id.get(target_label)

            if source_id is not None and target_id is not None:
                source_node = next(node for node in nodes_data['nodes'] if node['id'] == source_id)
                color = source_node['color']
                edges_list.append({
                    "id": edge_id_counter,
                    "source": source_id,
                    "target": target_id,
                    "attributes": {},
                    "color": color,
                })
                edge_id_counter += 1

    # Write edges JSON
    edges_json = {"edges": edges_list}
    with open(output_json, 'w') as output_file:
        json.dump(edges_json, output_file, indent=2)


def filter_and_create_csv(input_csv, nodes_csv, edges_csv, selected_sources):
    # Read the input CSV file
    with open(input_csv, 'r', newline='', encoding='utf-8') as csvfile:
        reader = csv.reader(csvfile)
        header = next(reader)  # Assume the first row is the header
        rows = list(reader)

    # Define the column indices for source and target
    source_column_index = header.index('source')
    target_column_index = header.index('target')

    # Filter rows based on selected sources
    filtered_rows = [row for row in rows if row[source_column_index] in selected_sources]

    # Create a set of unique characters and comics
    unique_characters = set()
    unique_comics = set()

    for row in filtered_rows:
        unique_characters.add(row[source_column_index])
        unique_comics.add(row[target_column_index])

    # Create a dictionary to store node sizes
    node_size = defaultdict(lambda: defaultdict(int))

    # Update node sizes based on comic co-appearances
    for comic in unique_comics:
        characters_in_comic = set(row[source_column_index] for row in filtered_rows if row[target_column_index] == comic)
        for char1 in characters_in_comic:
            for char2 in characters_in_comic:
                if char1 != char2:
                    node_size[char1][char2] += 1

    # Create a new CSV file for nodes
    with open(nodes_csv, 'w', newline='', encoding='utf-8') as nodes_file:
        nodes_writer = csv.writer(nodes_file)
        nodes_writer.writerow(['Id', 'Label', 'Size'])  # Assuming 'Size' represents the number of connections for each character

        # Iterate over unique characters
        for character in unique_characters:
            size = sum(node_size[character].values())
            nodes_writer.writerow([character, character, size])

    # Create a new CSV file for edges
    with open(edges_csv, 'w', newline='', encoding='utf-8') as edges_file:
        edges_writer = csv.writer(edges_file)
        edges_writer.writerow(['Source', 'Target', 'Type', 'Weight'])

        for source_character in unique_characters:
            for target_character in unique_characters:
                if source_character != target_character:
                    weight = node_size[source_character][target_character]
                    weight = node_size[source_character][target_character]
                    # Exclude edges with weight 0
                    if weight > 0:
                        edges_writer.writerow([source_character, target_character, "Undirected", weight])



if __name__ == "__main__":
    # Replace 'input_file.csv', 'nodes_file.csv', and 'edges_file.csv' with your file paths
    input_file_path = 'marvel_map.csv'
    nodes_file_path = 'nodes_file.csv'
    edges_file_path = 'edges_file.csv'

    # List of hero names to filter
    selected_sources = [
        'CARMILLA-FROST',
        'KILLRAVEN/JONATHAN-R',
        'M\'SHULLA',
        'OTHER-EXAMPLES',
    ]

    # filter_and_create_csv(input_file_path, nodes_file_path, edges_file_path, selected_sources)
    generate_edges_json("nodes.json", "edges_file.csv", "edges_output.json")
