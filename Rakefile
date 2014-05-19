#!/usr/bin/env ruby

task :default => :build

desc "remove old builds"
task :clean do
  FileUtils.rm_rf("_site")
  FileUtils.mkdir_p("_site")
end

desc "build site"
task :build do
  sh "jekyll build"
end

