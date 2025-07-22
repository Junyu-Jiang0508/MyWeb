FROM ruby:3.2.2-bullseye

RUN apt-get update && apt-get install -y \
    build-essential \
    git \
    nodejs \
    npm \
    yarn \
    tzdata \
    && rm -rf /var/lib/apt/lists/*

WORKDIR /usr/src/app

RUN gem install bundler

COPY Gemfile ./

RUN bundle install

COPY . .

EXPOSE 4000

CMD ["bundle", "exec", "jekyll", "serve", "--host", "0.0.0.0"]
