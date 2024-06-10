# Frontend-golang
Using wasm to execute go-lang on a browser

## Getting Started

These instructions will help you get the project up and running on your local machine for development and testing purposes.

### Installation

Step-by-step instructions to install the project.

1. Clone the repository.
   ```sh
   https://github.com/harsh4870/WASM-Docker.git && cd 01-Frontend-golang
   ```
2. Install [TinyGo](https://github.com/tinygo-org/tinygo) & run below command to compile Golang code to WASM binary
   ```sh
   tinygo build -o main.wasm -target wasm ./main.go
   ```
2. Run http-server
   ```sh
   http-server
   ```
3. Open the browser window
   ```
   http://localhost:8080
   ```
