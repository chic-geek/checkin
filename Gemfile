source 'https://rubygems.org'

# Out the box gems
# ========================================================================

gem 'rails', '4.2.1'                          # Bundle edge Rails instead: gem 'rails', github: 'rails/rails'
gem 'sqlite3'                                 # Use sqlite3 as the database for Active Record
gem 'sass-rails', '~> 5.0'                    # Use SCSS for stylesheets
gem 'uglifier', '>= 1.3.0'                    # Use Uglifier as compressor for JavaScript assets
gem 'coffee-rails', '~> 4.1.0'                # Use CoffeeScript for .coffee assets and views
gem 'jquery-rails'                            # Use jquery as the JavaScript library
gem 'turbolinks'                              # Turbolinks makes following links in your web application faster.
gem 'jbuilder', '~> 2.0'                      # Build JSON APIs with ease.
gem 'sdoc', '~> 0.4.0', group: :doc           # bundle exec rake doc:rails generates the API under doc/api.
# gem 'therubyracer', platforms: :ruby        # See https://github.com/sstephenson/execjs#readme for more supported runtimes
# gem 'bcrypt', '~> 3.1.7'                    # Use ActiveModel has_secure_password
# gem 'unicorn'                               # Use Unicorn as the app server



# Post install gems
# ========================================================================

gem 'bootstrap-sass', '~> 3.3.4.1'            # Twitter's Bootstrap framework converted to sass
gem 'devise', '~> 3.4.1'                      # Flexible authentication solution for Rails with Warden



# Environment grouped gems
# ========================================================================

group :production do
  gem 'pg'                                    # Pg is the Ruby interface to the PostgreSQL Relational Database Management System.
  gem 'rails_12factor'                        # Makes running your Rails app easier. Based on the ideas behind 12factor.net
end

group :development do
  gem 'capistrano-rails'                      # Use Capistrano for deployment
end

group :test do
end

group :development, :test do
  gem 'byebug'                                # Call 'byebug' anywhere in the code to stop execution and get a debugger console
  gem 'web-console', '~> 2.0'                 # Access an IRB console on exception pages or by using <%= console %> in views
  gem 'spring'                                # Spring speeds up development by keeping your application running in the background.
end
