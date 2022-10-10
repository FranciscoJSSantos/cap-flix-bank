export class Movie {
  id: number;
  name: string;
  genre: string;
  description: string;
  url: string;
  image;

  constructor(id: number, name: string, genre: string, description: string, url: string, image) {
    this.id = id;
    this.name = name;
    this.genre = genre;
    this.description = description;
    this.url = url;
    this.image = image;
  }
}
