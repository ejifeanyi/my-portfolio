'use client'

import * as React from 'react'
import { GithubLogo } from '@phosphor-icons/react'
import Link from 'next/link'

export function GithubRepo() {
  return (
    <Link
      href="https://github.com/ejifeanyi"
      target="_blank"
      rel="noopener noreferrer nofollow"
      className="text-md group flex  flex-row items-center justify-start font-medium transition hover:text-[#cc741a] dark:text-zinc-200 dark:hover:text-[#cc741a]"
    >
      <GithubLogo size={18} weight="duotone" />
      <span className="sr-only">Github Repo</span>
    </Link>
  )
}
