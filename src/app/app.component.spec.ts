import { TestBed, async } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { AppService } from './app.service';
import { FormsModule } from '@angular/forms';
import { GamePageService } from './game-page/game-page.service';
import { HttpClient, HttpHandler } from '@angular/common/http';

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent
      ],
      imports : [AppRoutingModule, FormsModule],
      providers:[AppService, GamePageService, HttpClient, HttpHandler]
    
    }).compileComponents();
  }));
});
