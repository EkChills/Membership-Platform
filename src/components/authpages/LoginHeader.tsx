import Link from "next/link"


interface LoginHeaderProps {
  mainText: string;
  subText?: string;
  linkTo?: string;
  linkActionText: string;
}

const LoginHeader = ({ mainText, subText, linkTo, linkActionText }: LoginHeaderProps) => {
  return (
    <div>
      <h2 className="font-bold text-3xl antialiased">{mainText}</h2>
      <p className="text-gray-500 text-sm mt-4 antialiased text-center">
        {subText} <span className="text-blue-700 hover:brightness-110 transition-all duration-300">
          {linkTo && <Link href={linkTo}>
            {linkActionText}
          </Link>}
        </span>
      </p>
    </div>
  );
};

export default LoginHeader;
