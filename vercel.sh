#!/bin/bash
 
if [[ $VERCEL_ENV == "production"  ]] ; then 
  pnpm run build:production
else 
  pnpm run build
fi
