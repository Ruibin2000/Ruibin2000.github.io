const astroBase = import.meta.env.BASE_URL;

export const basePath = astroBase.endsWith('/') ? astroBase : `${astroBase}/`;
