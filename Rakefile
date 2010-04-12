#!/usr/bin/env ruby 

require 'yaml'

desc "remove old builds"
task :clean do 
  FileUtils.rm_rf("_site")
  FileUtils.mkdir_p("_site")
end

desc "build site"
task :build do 
  unless system("jekyll")
    puts "jekyl failed, maybe it isn't installed"
  end
end

desc "serve site"
task :serve do 
  Dir.chdir(File.join(File.dirname(__FILE__), '_site')) do 
    system("python -m SimpleHTTPServer")
  end
end

desc "deploy site to production"
task :deploy do 
  # yes, this is specific to @auxesis's machine :-)
  system("rsync -auv -e ssh _site/ p:/srv/www/devopsdownunder.org/root/")
end

