FROM python:3.6
ENV PYTHONUNBUFFERED 1
RUN mkdir /code
WORKDIR /code
COPY . /code/
RUN pip install -r requirements.txt
RUN chmod +x docker-entrypoint.sh
CMD ["./docker-entrypoint.sh"]

