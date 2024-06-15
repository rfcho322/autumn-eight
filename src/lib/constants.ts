import Category from "@/components/icons/category";
import Logs from "@/components/icons/clipboard";
import Templates from "@/components/icons/cloud";
import Home from "@/components/icons/home";
import Payment from "@/components/icons/payment";
import Settings from "@/components/icons/settings";
import Workflows from "@/components/icons/workflows";
import { Connection } from "./types";
import DiscordIcon from "@/components/icons/discord";
import SlackIcon from "@/components/icons/slack";
import NotionIcon from "@/components/icons/notion";
import GoogleDriveIcon from "@/components/icons/google-drive";

export const clientLogos = [...new Array(10)].map((clientLogo, index) => ({
  href: `/logo${index + 1}.svg`,
}));

export const products = [
  {
    title: "Moonbeam",
    link: "https://gomoonbeam.com",
    thumbnail:
      "https://aceternity.com/images/products/thumbnails/new/moonbeam.png",
  },
  {
    title: "Cursor",
    link: "https://cursor.so",
    thumbnail:
      "https://aceternity.com/images/products/thumbnails/new/cursor.png",
  },
  {
    title: "Rogue",
    link: "https://userogue.com",
    thumbnail:
      "https://aceternity.com/images/products/thumbnails/new/rogue.png",
  },

  {
    title: "Editorially",
    link: "https://editorially.org",
    thumbnail:
      "https://aceternity.com/images/products/thumbnails/new/editorially.png",
  },
  {
    title: "Editrix AI",
    link: "https://editrix.ai",
    thumbnail:
      "https://aceternity.com/images/products/thumbnails/new/editrix.png",
  },
  {
    title: "Pixel Perfect",
    link: "https://app.pixelperfect.quest",
    thumbnail:
      "https://aceternity.com/images/products/thumbnails/new/pixelperfect.png",
  },

  {
    title: "Algochurn",
    link: "https://algochurn.com",
    thumbnail:
      "https://aceternity.com/images/products/thumbnails/new/algochurn.png",
  },
  {
    title: "Aceternity UI",
    link: "https://ui.aceternity.com",
    thumbnail:
      "https://aceternity.com/images/products/thumbnails/new/aceternityui.png",
  },
  {
    title: "Tailwind Master Kit",
    link: "https://tailwindmasterkit.com",
    thumbnail:
      "https://aceternity.com/images/products/thumbnails/new/tailwindmasterkit.png",
  },
  {
    title: "SmartBridge",
    link: "https://smartbridgetech.com",
    thumbnail:
      "https://aceternity.com/images/products/thumbnails/new/smartbridge.png",
  },
  {
    title: "Renderwork Studio",
    link: "https://renderwork.studio",
    thumbnail:
      "https://aceternity.com/images/products/thumbnails/new/renderwork.png",
  },

  {
    title: "Creme Digital",
    link: "https://cremedigital.com",
    thumbnail:
      "https://aceternity.com/images/products/thumbnails/new/cremedigital.png",
  },
  {
    title: "Golden Bells Academy",
    link: "https://goldenbellsacademy.com",
    thumbnail:
      "https://aceternity.com/images/products/thumbnails/new/goldenbellsacademy.png",
  },
  {
    title: "Invoker Labs",
    link: "https://invoker.lol",
    thumbnail:
      "https://aceternity.com/images/products/thumbnails/new/invoker.png",
  },
  {
    title: "E Free Invoice",
    link: "https://efreeinvoice.com",
    thumbnail:
      "https://aceternity.com/images/products/thumbnails/new/efreeinvoice.png",
  },
];

export const pricePlans = [
  {
    title: "Hobby",
    price: "$0/month",
    desc: "Get a glimpse of what our software is capable of. Just a heads up - you'll never want to leave us after this!",
    features: [
      {
        feature: "3 Free Automations",
      },
      {
        feature: "100 Tasks per Month",
      },
      {
        feature: "Two-Step Actions",
      },
    ],
  },
  {
    title: "Starter",
    price: "$9.99/month",
    desc: "Dive deeper into automation with our Starter plan, perfect for individuals and small teams looking to streamline their workflows.",
    features: [
      {
        feature: "10 Automations",
      },
      {
        feature: "500 Tasks per Month",
      },
      {
        feature: "Advanced Actions",
      },
      {
        feature: "Priority Support",
      },
    ],
  },
  {
    title: "Pro",
    price: "$29.99/month",
    desc: "Take your automation game to the next level with our Pro plan, designed for businesses and power users who demand the best.",
    features: [
      {
        feature: "Unlimited Automations",
      },
      {
        feature: "Unlimited Tasks",
      },
      {
        feature: "Custom Actions",
      },
      {
        feature: "24/7 Premium Support",
      },
      {
        feature: "Integration with Third-Party Apps",
      },
    ],
  },
];

export const sidebarItems = [
  { name: "Dashboard", Component: Home, href: "/dashboard" },
  { name: "Workflows", Component: Workflows, href: "/workflows" },
  { name: "Settings", Component: Settings, href: "/settings" },
  { name: "Connections", Component: Category, href: "/connections" },
  { name: "Billing", Component: Payment, href: "/billing" },
  { name: "Templates", Component: Templates, href: "/templates" },
  { name: "Logs", Component: Logs, href: "/logs" },
];

export const dashboardConnections = [
  {
    title: "Discord",
    description: "Automate messaging on Discord",
    icon: DiscordIcon,
  },
  {
    title: "Slack",
    description: "Automate team communication and notifications on Slack.",
    icon: SlackIcon,
  },
  {
    title: "Notion",
    description: "Automate content management and collaboration on Notion.",
    icon: NotionIcon,
  },
  {
    title: "Google Drive",
    description: "Automate file organization and sharing on Google Drive.",
    icon: GoogleDriveIcon,
  },
];

export const CONNECTIONS: Connection[] = [
  {
    title: "Google Drive",
    description: "Connect your google drive to listen to folder changes",
    image: "/google-drive.png",
    connectionKey: "googleNode",
    alwaysTrue: true,
  },
  {
    title: "Discord",
    description: "Connect your discord to send notification and messages",
    image: "/discord.png",
    connectionKey: "discordNode",
    accessTokenKey: "webhookURL",
  },
  {
    title: "Slack",
    description:
      "Use slack to send notifications to team members through your own custom bot.",
    image: "/slack.png",
    connectionKey: "slackNode",
    accessTokenKey: "slackAccessToken",
    slackSpecial: true,
  },
  {
    title: "Notion",
    description: "Create entries in your notion dashboard and automate tasks.",
    image: "/notion.png",
    connectionKey: "notionNode",
    accessTokenKey: "accessToken",
  },
];

export const EditorCanvasDefaultCardTypes = {
  Email: {
    description: "Send an email to a user.",
    type: "Action",
  },
  Condition: {
    description: "Create a conditional branch based on boolean operators.",
    type: "Action",
  },
  AI: {
    description:
      "Utilize AI capabilities for tasks such as summarization, response generation, and more.",
    type: "Action",
  },
  Slack: {
    description: "Send a notification to a Slack channel or user.",
    type: "Action",
  },
  "Google Drive": {
    description:
      "Interact with Google Drive to trigger actions or manipulate files and folders.",
    type: "Trigger",
  },
  Notion: {
    description: "Create entries directly in Notion.",
    type: "Action",
  },
  "Custom Webhook": {
    description:
      "Connect with any application that has an API key and send or receive data.",
    type: "Action",
  },
  Discord: {
    description:
      "Post messages to your Discord server or interact with Discord API.",
    type: "Action",
  },
  "Google Calendar": {
    description: "Schedule a calendar event or send calendar invites.",
    type: "Action",
  },
  Trigger: {
    description: "An event that initiates the workflow.",
    type: "Trigger",
  },
  Action: {
    description: "An event that occurs after the workflow starts.",
    type: "Action",
  },
  Wait: {
    description:
      "Delay the execution of the next action step using a wait timer.",
    type: "Action",
  },
};
