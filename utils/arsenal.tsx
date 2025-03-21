import ReactSVG from "@/public/icons/react.svg";
import NextSVG from "@/public/icons/nextdotjs.svg";
import JavascriptSVG from "@/public/icons/javascript.svg";
import TypescriptSVG from "@/public/icons/typescript.svg";
import ReduxSVG from "@/public/icons/redux.svg";
import CssSVG from "@/public/icons/css.svg";
import SassSVG from "@/public/icons/sass.svg";
import MaterialUISVG from "@/public/icons/mui.svg";
import TailwindSVG from "@/public/icons/tailwindcss.svg";
import StyledComponentsSVG from "@/public/icons/styledcomponents.svg";
import D3SVG from "@/public/icons/d3.svg";
import NodeSVG from "@/public/icons/nodedotjs.svg";
import PostgresqlSVG from "@/public/icons/postgresql.svg";
import PrismaSVG from "@/public/icons/prisma.svg";
import MongoSVG from "@/public/icons/mongodb.svg";
import MySQLSVG from "@/public/icons/mysql.svg";
import ExpressSVG from "@/public/icons/express.svg";
import GraphQLSVG from "@/public/icons/graphql.svg";
import FastAPISVG from "@/public/icons/fastapi.svg";
import RedisSVG from "@/public/icons/redis.svg";
import GitSVG from "@/public/icons/git.svg";
import GithubSVG from "@/public/icons/github.svg";
import BitbucketSVG from "@/public/icons/bitbucket.svg";
import JiraSVG from "@/public/icons/jira.svg";
import SlackSVG from "@/public/icons/slack.svg";
import ConfluenceSVG from "@/public/icons/confluence.svg";
import AWSSVG from "@/public/icons/amazonwebservices.svg";
import VercelSVG from "@/public/icons/vercel.svg";
import DockerSVG from "@/public/icons/docker.svg";
import LaravelSVG from "@/public/icons/laravel.svg";
import GoogleCloudSVG from "@/public/icons/googlecloud.svg";
import { ArsenalDataType } from "@/components/ArsenalDrawer/types";

export const arsenalData: ArsenalDataType = {
    Frontend: [
      { name: "React.js", icon: <ReactSVG /> },
      { name: "Next.js", icon: <NextSVG /> },
      { name: "JavaScript", icon: <JavascriptSVG /> },
      { name: "TypeScript", icon: <TypescriptSVG /> },
      { name: "Redux", icon: <ReduxSVG /> },
      { name: "React Context", icon: <ReactSVG /> },
    ],
    "UI/UX": [
      { name: "CSS", icon: <CssSVG /> },
      { name: "SASS", icon: <SassSVG /> },
      { name: "D3.js", icon: <D3SVG /> },
      { name: "Tailwind", icon: <TailwindSVG /> },
      { name: "Material UI", icon: <MaterialUISVG /> },
      { name: "Styled Components", icon: <StyledComponentsSVG /> },
    ],
    Backend: [
      { name: "Node.js", icon: <NodeSVG /> },
      { name: "Express.js", icon: <ExpressSVG /> },
      { name: "GraphQL", icon: <GraphQLSVG /> },
      { name: "FastAPI (Python)", icon: <FastAPISVG /> },
      { name: "Laravel (PHP)", icon: <LaravelSVG /> },
    ],
    Databases: [
      { name: "PostgreSQL", icon: <PostgresqlSVG /> },
      { name: "Redis", icon: <RedisSVG /> },
      { name: "MongoDB", icon: <MongoSVG /> },
      { name: "MySQL", icon: <MySQLSVG /> },
      { name: "Prisma", icon: <PrismaSVG /> },
    ],
    "CI/CD": [
      { name: "Docker", icon: <DockerSVG /> },
      { name: "AWS", icon: <AWSSVG /> },
      { name: "GCP", icon: <GoogleCloudSVG /> },
      { name: "Vercel", icon: <VercelSVG /> },
    ],
    Collaboration: [
      { name: "Git", icon: <GitSVG /> },
      { name: "GitHub", icon: <GithubSVG /> },
      { name: "Bitbucket", icon: <BitbucketSVG /> },
      { name: "Jira", icon: <JiraSVG /> },
      { name: "Confluence", icon: <ConfluenceSVG /> },
      { name: "Slack", icon: <SlackSVG /> },
    ],
  };