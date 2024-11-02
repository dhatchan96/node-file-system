
# Timestamp File Creator API

This is a simple Node.js and Express API that creates a `.txt` file with the current timestamp as its content. The file is stored in a designated folder on the server.

## Features

- **Create Timestamp File**: Generates a `.txt` file with the current timestamp when the endpoint is accessed.
- **Unique Filenames**: Each file name includes a unique timestamp for differentiation.
- **Automatic Folder Creation**: The folder for storing the timestamp files is created automatically if it doesn’t exist.

## Prerequisites

- **Node.js** (v12 or higher)
- **npm**

## Getting Started

1. **Clone the Repository**:
    ```bash
    git clone https://github.com/dhatchan96/node-file-system
    cd node-file-system
    ```

2. **Install Dependencies**:
    ```bash
    npm install
    ```

3. **Run the Server**:
    ```bash
    node yourFileName.js
    ```

4. **Access the API**:
   Open a browser or API client (e.g., Postman) and go to:
   ```
   http://localhost:3000/create-timestamp-file
   ```

## API Endpoint

### Create Timestamp File

- **URL**: `/create-timestamp-file`
- **Method**: `GET`
- **Description**: Creates a `.txt` file with the current timestamp as content and stores it in the `timestamp_files` folder.

### Response
- **Success**: Returns a message with the file's path.
- **Error**: Returns a 500 error message if the file creation fails.

## Folder Structure

- **timestamp_files/**: Folder where the timestamp files are saved. It is created automatically if it doesn't exist.
- **yourFileName.js**: Main server file that defines the API endpoint.

## Example

After accessing `http://localhost:3000/create-timestamp-file`, a file with the current timestamp is generated in `timestamp_files` folder with a unique filename, such as `timestamp_1698898476312.txt`.

## License

This project is licensed under the MIT License.
