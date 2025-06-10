import CallToAction from "@/components/CallToAction";
import Link from "next/link";

export default function About() {
  return (
    <section className="max-w-6xl mx-auto px-6 py-16 text-white">
      <h1 className="text-4xl md:text-5xl font-extrabold mb-10 text-purple-300 drop-shadow-md tracking-tight text-center">
        Meet Kobe
      </h1>

      <div className="flex flex-col md:flex-row items-center md:items-start gap-10">
        {/* Placeholder avatar */}
        <div className="flex-shrink-0 w-32 h-32 md:w-48 md:h-48 rounded-full overflow-hidden border-4 border-purple-500 shadow-lg">
          <img
            src="https://ui-avatars.com/api/?name=Kobe&background=6B21A8&color=fff&size=256"
            alt="Kobe avatar placeholder"
            className="w-full h-full object-cover"
          />
        </div>

        {/* About Text */}
        <div className="space-y-6 text-base md:text-lg leading-relaxed text-gray-300 max-w-3xl bg-white/10 border border-purple-500 backdrop-blur-md p-6 rounded-3xl shadow-lg">
          <p>
            Hey there &mdash; I&#39;m{" "}
            <span className="font-semibold text-purple-300">Kobe</span>, a
            client-focused and detail-oriented software engineer with a
            Bachelor&#39;s degree in Software Engineering from Western Governors
            University. With over 8 years of hands-on experience in IT and
            development, I&#39;ve had the privilege of helping organizations
            build, maintain, and scale digital solutions that actually make a
            difference.
          </p>

          <p>
            Whether it&#39;s crafting clean websites, fine-tuning backends, or
            navigating a messy tech stack, I thrive on bringing order, clarity,
            and results to every project I touch. I don&#39;t just build to
            build &mdash; I build with purpose.
          </p>

          <p>
            On the personal side, I&#39;m a proud Christian, a dedicated husband
            and dad, and a big believer in faith, family, and lifelong learning.
            My son, who has Down syndrome, teaches me more about strength and
            joy than any book or course ever could. And with a baby daughter on
            the way, life just keeps getting sweeter (and busier!).
          </p>

          <p>
            When I&#39;m not writing code or managing IT workflows, you&#39;ll
            probably find me reading, spending quality time with my family, or
            grilling up something legendary on the weekends.
          </p>

          <p>
            If you&#39;re looking for someone who blends real-world IT
            experience with a people-first approach and a good dose of
            dedication &mdash; I&#39;d love to connect.
          </p>
          
        </div>
      </div>
      <CallToAction />
    </section>
  );
}
