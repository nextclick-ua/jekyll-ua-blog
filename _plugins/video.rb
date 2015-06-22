class Video < Liquid::Tag
   # {% video /movie.mp4 560 420 %}
  Syntax = /^\s*([^\s]+)(\s+(\d+)\s+(\d+)\s*)?/

  def initialize(tagName, markup, tokens)
    super

    if markup =~ Syntax then
      @path = $1

      if $2.nil? then
          @width = 560
          @height = 420
      else
          @width = $2.to_i
          @height = $3.to_i
      end
    else
      raise "No filename provided in the \"video\" tag"
    end
  end

  def render(context)
    "<video width=\"#{@width}\" height=\"#{@height}\" controls>
    <source src=\"#{@path}\" type=\"video/mp4\">
    Your browser does not support the video tag.
    </video>"
  end

  Liquid::Template.register_tag "video", self
end