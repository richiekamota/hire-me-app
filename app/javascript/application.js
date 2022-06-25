// Configure your import map in config/importmap.rb. Read more: https://github.com/rails/importmap-rails
import { Turbo } from "@hotwired/turbo-rails"
Turbo.session.drive = false
import "controllers"
import "trix"
import "@rails/actiontext"
import 'bootstrap'

console.log('Hello World from application.js');
