# fronzen_string_literal:true

x = 14
y = 12
z = x**y

puts z

unless  z%3==0 then
    puts '3で割り切れませんでした'  
end


case z%2
when 0
  puts 'zは偶数です'
else
  puts 'zは奇数です'
end
