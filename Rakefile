task :default => [:build]

task :build => [:makecss, :makejs] do
    system("jekyll --no-server")
end

task :dev => [:makecss, :makejs] do
    system("jekyll --server --auto")
end

task :makecss do
    File.open("stylesheets.css", "w") {
        |out|
        Dir["styles/*.css"].each do |file|
            lines = File.readlines(file)
            out.write lines.join
        end
    }
end
            
task :makejs do
    File.open("scripts.js", "w") {
        |out|
        Dir["scripts/*.js"].sort.each do |file|
            lines = File.readlines(file)
            out.write lines.join
        end
    }
end
