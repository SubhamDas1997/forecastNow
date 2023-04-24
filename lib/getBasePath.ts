const getBasePath = () => {
    let base_url = process.env.NODE_ENV === "development" ? `http://localhost:${process.env.APP_PORT_NO}` : `https://${process.env.VERCEL_URL}`;

    return base_url
}

export default getBasePath