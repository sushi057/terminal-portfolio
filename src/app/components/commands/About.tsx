import Link from "next/link";

export default function About() {
  return (
    <div className="flex flex-col">
      <section>
        <p>
          Sashank Ghimire
          <br />
          Electronics and Communication Engineering
          <br />
          IOE Thapathali Campus
          <br />
          Network and Cybersecuirity Enthusiast
        </p>
      </section>
      <section className="mt-4 flex flex-row gap-16">
        <ul>
          <li>email</li>
          <li>linkedin</li>
          <li>github</li>
        </ul>
        <ul>
          <li className="text-cyan-500 hover:underline">
            <Link href="mailto: redemption8848@gmail.com" target="_blank">
              redemption8848@gmail.com
            </Link>
          </li>
          <li className="text-cyan-500 hover:underline">
            <Link
              href="https://www.linkedin.com/in/shashank-ghimire-b51759199"
              target="_blank"
            >
              linkedin/shashank-ghimire
            </Link>
          </li>
          <li className="text-cyan-500 hover:underline">
            <Link href="https://github.com" target="_blank">
              github.com/shashank
            </Link>
          </li>
        </ul>
      </section>
    </div>
  );
}
