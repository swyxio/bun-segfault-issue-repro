FROM ubuntu:latest
FROM jarredsumner/bun:edge


RUN apt update && apt install -y strace


CMD bun run http.js
RUN strace df -h
