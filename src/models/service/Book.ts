import {ImageLink} from "./ImageLink";
import {IndustryIdentifiers} from "./IndustryIdentifiers";
import {PanelizationSummary} from "./PanelizationSummary";
import {ReadingMode} from "./ReadingMode";

export type Book = {
    title: string;
    subtitle: string;
    authors: string[];
    publisher: string;
    publishedDate: string;
    description: string;
    industryIdentifiers: IndustryIdentifiers[],
    readingModes: ReadingMode,
    pageCount: number,
    printType: string,
    categories: string[],
    averageRating: number,
    ratingsCount: number,
    maturityRating: string,
    allowAnonLogging: boolean,
    contentVersion: string,
    panelizationSummary: PanelizationSummary,
    imageLinks: ImageLink,
    language: string,
    previewLink: string,
    infoLink: string,
    canonicalVolumeLink: string,
    id: string,
    shelf: string
}