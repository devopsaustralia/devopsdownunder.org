#!/usr/bin/env ruby 

require 'yaml'

desc "remove old builds"
task :clean do 
  FileUtils.rm_rf("_site")
  FileUtils.mkdir_p("_site")
end

desc "build site"
task :build do 
  system("jekyll")
end

desc "deploy site to production"
task :deploy do 
  # yes, this is specific to @auxesis's machine :-)
  system("rsync -auv -e ssh _site/ p:/srv/www/devopsdownunder.org/root/")
end

