// pages/api/revalidate.js

export default async function handler(req, res) {
  // Check for secret to confirm this is a valid request
  if (req.query.secret !== process.env.MY_SECRET_TOKEN) {
    return res.status(401).json({ message: "Invalid token" });
  }
  // each page built as (SSG way) needs a separated statement to revalidate its data
  try {
    await res.unstable_revalidate("/");
    await res.unstable_revalidate("/de");
    await res.unstable_revalidate("/team");
    await res.unstable_revalidate("/de/team");
    await res.unstable_revalidate("/aboutus");
    await res.unstable_revalidate("/de/aboutus");
    await res.unstable_revalidate("/contactus");
    await res.unstable_revalidate("/de/contactus");
    await res.unstable_revalidate("/faq");
    await res.unstable_revalidate("/de/faq");
    await res.unstable_revalidate("/gallery");
    await res.unstable_revalidate("/de/gallery");
    await res.unstable_revalidate("/services");
    await res.unstable_revalidate("/de/services");
    return res.json({ revalidated: true });
  } catch (err) {
    // If there was an error, Next.js will continue
    // to show the last successfully generated page
    return res.status(500).send(err.message);
  }
}
