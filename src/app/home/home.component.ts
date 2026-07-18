import { Component, OnDestroy, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    RouterLink,
  ],
  templateUrl: './home.component.html',
  styleUrls: [
    './home.component.css',
  ]
})

export class HomeComponent implements OnInit, OnDestroy {

  dynamicText: string = "";
  phrases: string[] = [
    "AI/ML Engineer.",
    "GenAI Specialist.",
    "Data Scientist.",
    "Agentic AI Engineer.",
    "NLP & LLM Expert.",
    "AI Product Builder.",
  ];



  currentPhraseIndex: number = 0;
  currentCharIndex: number = 0;
  isDeleting: boolean = false;
  typingSpeed: number = 70;
  deletingSpeed: number = 70;
  delayBetweenPhrases: number = 1000;
  private typingTimer: ReturnType<typeof setTimeout> | null = null;

  constructor(private titleService: Title) {
    this.titleService.setTitle('Home')
  }


  ngOnInit(): void {
    if (typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      this.dynamicText = this.phrases[0];
      return;
    }

    this.type();
  }

  ngOnDestroy(): void {
    if (this.typingTimer) {
      clearTimeout(this.typingTimer);
      this.typingTimer = null;
    }
  }

  type() {
    const currentPhrase = this.phrases[this.currentPhraseIndex];
    if (this.isDeleting) {
      this.dynamicText = currentPhrase.substring(0, this.currentCharIndex - 1);
      this.currentCharIndex--;
    } else {
      this.dynamicText = currentPhrase.substring(0, this.currentCharIndex + 1);
      this.currentCharIndex++;
    }

    if (!this.isDeleting && this.currentCharIndex === currentPhrase.length) {
      this.isDeleting = true;
      this.typingTimer = setTimeout(() => this.type(), this.delayBetweenPhrases);
    } else if (this.isDeleting && this.currentCharIndex === 0) {
      this.isDeleting = false;
      this.currentPhraseIndex = (this.currentPhraseIndex + 1) % this.phrases.length;
      this.typingTimer = setTimeout(() => this.type(), 500);
    } else {
      const speed = this.isDeleting ? this.deletingSpeed : this.typingSpeed;
      this.typingTimer = setTimeout(() => this.type(), speed);
    }
  }


}
