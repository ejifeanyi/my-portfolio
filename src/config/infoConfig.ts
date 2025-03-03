export * from './projects'
export * from './changelog'
export * from './education'
export * from './career'
export * from './activity'

// personal info
export const name = 'Ifeanyi J. Emmanuel'
export const headline =
  'Software engineer, Full-Stack web developer and Data engineer.'
export const introduction =
  'I’m Ifeanyi, a software engineer based in Lagos, Nigeria. I like coding, and building interesting things'
export const email = 'ifeanyiemmanueljoseph@gmail.com'
export const githubUsername = 'ejifeanyi'

// about page
export const aboutMeHeadline =
  "I'm Ifeanyi J. Emmanuel, a software engineer based in Lagos, Nigeria."
export const aboutParagraphs = [
  'I love coding. I learned programming before going to college. I wrote my first program in Javascript when I was 19.',
  'I have a lot of hobbies, such as travelling, making music, watching movies, reading and so on.',
  "I'm working as a software developer/engineer in Lagos, Nigeria now. And I'm building a lot of side projects in my spare time.",
]

// blog
export const blogHeadLine = "What I've been thinking about."
export const blogIntro =
  "I've written something about Data, programming and life."

// social links
export type SocialLinkType = {
  name: string
  ariaLabel?: string
  icon: string
  href: string
}

export const socialLinks: Array<SocialLinkType> = [
  {
    name: 'X',
    icon: 'x',
    href: 'https://x.com/therealtechbro',
  },
  {
    name: 'Linkedin',
    icon: 'linkedin',
    href: 'https://www.linkedin.com/in/ifeanyi-emmanuel',
  },
  {
    name: 'Github',
    icon: 'github',
    href: 'https://github.com/ejifeanyi',
  },
  // {
  //   name: 'Ko-fi',
  //   icon: 'coffee',
  //   href: 'https://ko-fi.com/coreychiu',
  // },
]

// https://simpleicons.org/
export const techIcons = [
  'typescript',
  'javascript',
  'supabase',
  'cloudflare',
  'java',
  'oracle',
  'mysql',
  'react',
  'nodedotjs',
  'nextdotjs',
  'prisma',
  'postgresql',
  'nginx',
  'vercel',
  'docker',
  'git',
  'github',
  'visualstudiocode',
  'androidstudio',
  'ios',
  'apple',
  'wechat',
]
