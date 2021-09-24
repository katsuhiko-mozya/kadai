# fronzen_string_literal:true

x = 14
y = 12
z = x**y

puts z

puts '3で割り切れませんでした' unless z / 3

case z / 2
when 0
  puts 'zは偶数です'
else
  puts 'zは奇数です'
end
