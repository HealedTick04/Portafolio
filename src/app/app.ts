import { Component } from '@angular/core';

import { Navbar } from './components/navbar/navbar';
import { Home } from './components/home/home';
import { About } from './components/about/about';
import { Experience } from './components/experience/experience';
import { Technologies } from './components/technologies/technologies';
import { Projects } from './components/projects/projects';
import { Contact } from './components/contact/contact';

@Component({
  selector: 'app-root',
  imports: [
    Navbar,
    Home,
    About,
    Experience,
    Technologies,
    Projects,
    Contact
  ],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
}