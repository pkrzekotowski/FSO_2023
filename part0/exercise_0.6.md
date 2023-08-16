sequenceDiagram
    participant browser
    participant server

    browser->>server: POST https://studies.cs.helsinki.fi/exampleapp/new_note_spa
    activate server
    server-->>browser: status code 201 created
    deactivate server

    Note right of browser: The browser sent new note as JSON data to the server. Note is instantly rendered in the browser without reloading
