export enum Nav {
	Home = "Hem",
	Orphanage = "Barnhemmet",
	SocialCenter = "Sociala Centret",
	Trips = "Resor",
	Gallery = "Galleri",
	Contact = "Kontakta",
}

export const ROUTE_HOME = "/";
export const ROUTE_ORPHANAGE = "/barnhemmet";
export const ROUTE_SOCIAL_CENTER = "/sociala-centret";
export const ROUTE_TRIPS = "/resor";
export const ROUTE_GALLERY = "/galleri";

export const ID_CONTACT = "kontakta";
export const ID_DONATE = "donera";

export const ROUTES: Record<Nav, string> = {
	[Nav.Home]: ROUTE_HOME,
	[Nav.Orphanage]: ROUTE_ORPHANAGE,
	[Nav.SocialCenter]: ROUTE_SOCIAL_CENTER,
	[Nav.Trips]: ROUTE_TRIPS,
	[Nav.Gallery]: ROUTE_GALLERY,
	[Nav.Contact]: `#${ID_CONTACT}`,
};
