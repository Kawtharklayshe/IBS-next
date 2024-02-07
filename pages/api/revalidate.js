// pages/api/revalidate.js

export default async function handler(req, res) {
  // solve cors origin issue
  res.setHeader("Access-Control-Allow-Origin", "*");

  // Check for secret to confirm this is a valid request
  if (req.query.secret !== process.env.NEXT_PUBLIC_MY_SECRET_TOKEN) {
    return res.status(401).json({ message: "Invalid token" });
  }
  // each page built with (SSG way) needs a separated statement to revalidate its data
  try {
    await res.revalidate("/");
    await res.revalidate("/de");
    await res.revalidate("/ar");
    await res.revalidate("/team");
    await res.revalidate("/de/team");
    await res.revalidate("/ar/team");
    await res.revalidate("/aboutus");
    await res.revalidate("/de/aboutus");
    await res.revalidate("/ar/aboutus");
    await res.revalidate("/contactus");
    await res.revalidate("/de/contactus");
    await res.revalidate("/ar/contactus");
    await res.revalidate("/faq");
    await res.revalidate("/de/faq");
    await res.revalidate("/ar/faq");
    await res.revalidate("/gallery");
    await res.revalidate("/de/gallery");
    await res.revalidate("/ar/gallery");
    await res.revalidate("/services");
    await res.revalidate("/de/services");
    await res.revalidate("/ar/services");
    await res.revalidate("/devices");
    await res.revalidate("/de/devices");
    await res.revalidate("/ar/devices");
    await res.revalidate("/buying-shipping");
    await res.revalidate("/de/buying-shipping");
    await res.revalidate("/ar/buying-shipping");
    await res.revalidate("/fieldExperiments");
    await res.revalidate("/de/fieldExperiments");
    await res.revalidate("/ar/fieldExperiments");
    await res.revalidate("/learningVideos");
    await res.revalidate("/de/learningVideos");
    await res.revalidate("/ar/learningVideos");
    await res.revalidate("/maintenance-support");
    await res.revalidate("/de/maintenance-support");
    await res.revalidate("/ar/maintenance-support");
    return res.status(200).json({ revalidated: true });
  } catch (err) {
    // If there was an error, Next.js will continue
    // to show the last successfully generated page
    return res.status(500).send(err.message);
  }
}
