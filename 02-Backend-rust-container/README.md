# Backend-rust-container
Using wasm to run rust HTTP server on a container

## Getting Started

These instructions will help you get the project up and running on your local machine for development and testing purposes.

## Docker Flags

  - --platform wasi/wasm
  - --runtime=io.containerd.wasmedge.v1

### Installation

Step-by-step instructions to install the project.

1. Clone the repository.
   ```sh
   https://github.com/harsh4870/WASM-Docker.git && cd 03-Backend-rust-container
   ```
2. Build Docker image
   ```sh
   docker buildx build --platform wasi/wasm -t wasm-docker-example .
   ```
2. Run docker image
   ```sh
   docker run -p 8080:8080 --rm --runtime=io.containerd.wasmedge.v1 --platform=wasi/wasm wasm-docker-example
   ```
3. Open the browser window
   ```
   http://localhost:8080
   ```
4. Check the Docker image Architecture
   ```sh
   docker image inspect wasm-docker-example | grep -A 3 "Architecture"
   ```
   Output
   ```
        "Architecture": "wasm",
        "Os": "wasi",
        "Size": 2390708,
        "VirtualSize": 2390708,
   ```