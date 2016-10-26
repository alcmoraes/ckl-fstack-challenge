
FROM python:2.7

MAINTAINER Alexandre Moraes | http://github.com/alcmoraes

ENV PYTHONUNBUFFERED 1

RUN mkdir /var/www

WORKDIR /var/www

ADD requirements.txt /var/www/

RUN pip install -r requirements.txt

ADD . /var/www/