// Reverse a string
String.prototype.reverse = () => Array.from(this).reverse().join("");

function Phrase(content) {
  this.content = content;

  this.palindrom = () =>
    this.processContent() == this.processContent().reverse();

  this.processContent = () => this.processor(this.content);

  this.processor = (string) => string.toLowerCase();
}

function TranslationPhrase(content, translation) {
  this.content = content;
  this.translation = translation;

  this.processContent = () => this.processor(this.translation);
}

TranslationPhrase.prototype = new Phrase();
