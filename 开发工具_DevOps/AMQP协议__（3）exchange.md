# AMQP协议——（3）exchange


> 原文地址: [https://mp.weixin.qq.com/s/xzctCiTx5BoIcEWkYWqu8w](https://mp.weixin.qq.com/s/xzctCiTx5BoIcEWkYWqu8w)

![](AMQP协议__（3）exchange_images/img_000_2dffb1e7a351.png)

 这张图表展示了 RabbitMQ 消息队列系统中的基本架构和消息路由机制。整体结构分为三个主要部分：生产者（Producer）、经纪人（Broker，包括 Exchange、Bindings 和 Queues）、以及消费者（Consumer）。生产者发送消息到 Broker，Broker 通过 Exchange 根据绑定规则将消息路由到合适的队列（Queues），消费者则从队列中消费消息。

-   生产者（Producer）：位于顶部，以信封图标表示，负责生成并发送消息到 Broker 中的 Exchange。
    
-   Broker：中间核心部分，包括：
    

-   Exchange：分为三种类型——Direct（绿色）、Topic（橙色）和 Fanout（蓝色）。这是消息路由的核心组件。
    
-   Bindings：绑定键（Binding Key），用于连接 Exchange 和 Queues。例如，Direct Exchange 使用 "PDF process" 作为绑定键；Topic Exchange 使用路由模式如 "eu.de.\*" 和 "us.#"；Fanout Exchange 则无特定绑定键，直接广播。
    
-   Queues：底部多个队列，如 Queue 1、Queue 2、Q3 到 Q6。每个队列可以绑定到不同的 Exchange，用于存储待消费的消息。
    
      
    

-   消费者（Consumer）：底部，以信封图标表示，从特定队列中接收消息（图中显示从 Queue 1 或 Queue 2 接收）。
    
-   路由流程：箭头表示消息流动方向。生产者发送消息到 Exchange，Exchange 根据绑定规则将消息推送到队列，最终到达消费者。图中强调了不同 Exchange 的路由模式：Direct 是点对点，Topic 是基于模式匹配，Fanout 是广播式。
    

图表突出了 RabbitMQ 的灵活路由能力，展示了如何通过不同 Exchange 类型实现消息的分发。

### Exchange 的概念

在 RabbitMQ（一种基于 AMQP 协议的消息中间件）中，Exchange（交换机）是消息路由的核心组件。它充当消息的“路由器”或“分发器”，负责接收生产者发送的消息，并根据预定义的规则（绑定和路由键）将消息转发到合适的队列中。Exchange 本身不存储消息，而是立即路由；如果没有匹配的队列，消息可能会被丢弃或返回给生产者（取决于配置）。

Exchange 的关键概念包括：

-   路由键（Routing Key）：生产者发送消息时附带的键值，用于匹配绑定规则。
    
-   绑定（Binding）：Exchange 和队列之间的关联，通常指定一个绑定键。绑定定义了消息从 Exchange 到队列的路径。
    
-   类型（Type）：Exchange 有多种类型，每种类型决定了路由逻辑。图中展示了三种常见类型：
    

-   Direct Exchange：直接交换机。路由基于精确匹配：消息的路由键必须完全匹配绑定的绑定键。例如，图中 "PDF process" 绑定键将消息直接路由到 Queue 1。这适合点对点通信场景。
    
-   Topic Exchange：主题交换机。支持模式匹配，使用通配符（如 "_" 匹配单个词，"#" 匹配零或多个词）。图中示例如 "eu.de._"（匹配如 "eu.de.invoice"）路由到 Queue 2，"us.#"（匹配如 "us.california" 或 "us"）路由到多个队列。这允许更灵活的主题订阅。
    
-   Fanout Exchange：扇出交换机。忽略路由键，将消息广播到所有绑定的队列。图中显示直接分发到 Q3 到 Q6，适合发布-订阅模式（如广播通知）。
    
      
    

-   此外，还有 Headers Exchange（基于消息头匹配），但图中未显示。
    

Exchange 是解耦生产者和消费者的关键：生产者无需知道队列的存在，只需发送到 Exchange；消费者只需订阅队列。默认情况下，RabbitMQ 有一个名为 ""（空字符串）的 Direct Exchange。

### Exchange 的用途

Exchange 的设计使得 RabbitMQ 适用于各种分布式系统场景，主要用途包括：

1.  消息路由和分发：实现复杂路由逻辑。例如，在微服务架构中，Direct Exchange 可用于定向任务分配（如将 "PDF process" 消息发送给特定处理服务）；Topic Exchange 适合日志系统，按主题（如 "error.\*" 或 "info.#"）分发日志到不同消费者；Fanout Exchange 用于实时广播，如股票价格更新或通知系统。
    
2.  解耦系统组件：生产者和消费者无需直接交互。通过 Exchange，系统可以动态添加/移除队列，而不影响生产者。这提高了系统的可扩展性和灵活性，例如在电商平台中，订单消息可以路由到支付、库存和物流队列。
    
3.  负载均衡和容错：多个队列绑定到同一 Exchange，可以实现消息的负载分担。如果一个消费者失败，消息仍可在队列中等待其他消费者处理。
    
4.  实际应用场景：
    

-   日志记录：使用 Topic Exchange，按严重级别或来源路由日志。
    
-   任务队列：Direct 或 Topic Exchange 分配异步任务，如 Celery 框架中的 worker。
    
-   实时聊天或推送：Fanout Exchange 广播消息给所有在线用户。
    
-   IoT 系统：Topic Exchange 处理设备消息，如 "sensor.temperature.\*" 路由到监控队列。
    
      
    

总体而言，Exchange 是 RabbitMQ 强大路由能力的体现，帮助构建高效、可靠的消息系统。

## Exchange三种类型的概念和应用场景

### Direct Exchange

**概念**：Direct Exchange（直接交换机）是一种简单的路由机制，它根据消息的路由键（Routing Key）与队列的绑定键（Binding Key）进行精确匹配。只有当路由键完全匹配绑定键时，消息才会被路由到对应的队列中。如果没有匹配的队列，消息可能会被丢弃（取决于Exchange的配置）。这种Exchange适合一对一或点对点的消息传递，不支持通配符或模式匹配。默认的Exchange（名为""）就是Direct类型。

**应用场景**：

-   任务队列系统：如在Celery或分布式任务处理中，将特定任务（如"process\_order"）直接分配给专责的worker队列，避免广播到无关消费者。
    
-   RPC（远程过程调用）：生产者发送请求消息到特定路由键，消费者处理后回复，适用于需要精确响应的场景，如API调用模拟。
    
-   简单日志记录：按类别（如"error"或"info"）直接路由到特定日志队列，便于分类存储和处理。
    

### Topic Exchange

**概念**：Topic Exchange（主题交换机）支持基于主题的路由，使用路由键的模式匹配来决定消息分发。路由键通常是点分隔的字符串（如"stock.us.nyse"），绑定键可以使用通配符："\*"匹配单个词，"#"匹配零或多个词。这种灵活性允许消息被路由到多个匹配的队列，实现多对多的发布-订阅模式。如果没有匹配，消息被丢弃。

**应用场景**：

-   日志系统：如ELK栈（Elasticsearch, Logstash, Kibana）中，按主题路由日志，例如绑定键"kern.\*"匹配内核日志，"#.error"匹配所有错误日志，便于多级分类和监控。
    
-   事件驱动架构：在微服务中，处理复杂事件，如电商平台的"order.placed.us"路由到支付和库存服务，支持动态订阅。
    
-   实时数据分发：如股票市场更新，路由键"finance.stock._"可以让不同订阅者（如"finance.stock.nyse"或"finance.stock._"）接收相关数据。
    

### Topic Exchange 与 Direct Exchange 的比较

特性

Direct Exchange

Topic Exchange

路由规则

精确匹配路由键

模式匹配（通配符 \* 和 #）

灵活性

低，适合简单点对点

高，适合复杂主题订阅

典型用途

定向任务分配

多级日志或事件路由

性能考虑

高效，匹配简单

稍复杂，但支持更广的场景

### Fanout Exchange

**概念**：Fanout Exchange（扇出交换机）是一种广播机制，它忽略路由键，直接将消息复制并发送到所有绑定的队列中。无论队列有多少，只要绑定了该Exchange，消息都会被均匀分发。这种Exchange最简单，不涉及任何匹配逻辑，适合一对多的无条件广播。如果没有绑定队列，消息被丢弃。

**应用场景**：

-   广播通知系统：如聊天应用或推送服务，将系统公告（如"server\_maintenance"）广播到所有在线用户的队列，实现实时通知。
    
-   缓存失效：在分布式缓存（如Redis）中，当数据更新时，广播失效消息到所有节点，确保一致性。
    
-   多消费者负载均衡：如在游戏服务器中，将全局事件（如"game\_start"）分发到所有玩家队列，支持并行处理。
    

这些Exchange类型可以根据需求组合使用，例如在大型系统中，先用Fanout广播，再用Topic过滤。RabbitMQ还支持Headers Exchange（基于消息头匹配）。

### Direct Exchange 代码示例

Direct Exchange 的代码示例使用 Python 的 pika 库（RabbitMQ 的官方 Python 客户端）。以下是生产者和消费者的基本实现。假设你已安装 pika（pip install pika），并有运行中的 RabbitMQ 服务器（默认 localhost:5672）。

**生产者（Sender）代码**：

Python

```

```

`import pika``   ``# 建立连接``connection = pika.BlockingConnection(pika.ConnectionParameters('localhost'))``channel = connection.channel()``   ``# 声明 Direct Exchange``channel.exchange_declare(exchange='direct_logs', exchange_type='direct')``   ``# 发送消息，指定路由键``severity = 'info'  # 可以是 'info', 'warning', 'error'``message = 'Hello Direct!'``channel.basic_publish(exchange='direct_logs',`                      `routing_key=severity,`                      `body=message)``print(f" [x] Sent {severity}:{message}")``   ``connection.close()`

```

```

```

```

  

**消费者（Receiver）代码**：

Python

```

```

`import pika``import sys``   ``connection = pika.BlockingConnection(pika.ConnectionParameters('localhost'))``channel = connection.channel()``   ``# 声明 Exchange 和队列``channel.exchange_declare(exchange='direct_logs', exchange_type='direct')``result = channel.queue_declare(queue='', exclusive=True)``queue_name = result.method.queue``   ``# 绑定队列到 Exchange，使用路由键``severities = ['info', 'warning']  # 可以绑定多个``for severity in severities:`    `channel.queue_bind(exchange='direct_logs',`                       `queue=queue_name,`                       `routing_key=severity)``   ``print(' [*] Waiting for logs. To exit press CTRL+C')``   ``def callback(ch, method, properties, body):`    `print(f" [x] {method.routing_key}:{body.decode()}")``   ``channel.basic_consume(queue=queue_name, on_message_callback=callback, auto_ack=True)``channel.start_consuming()`

```

```

```

```

  

**说明**：生产者发送带路由键的消息（如 'info'），消费者只接收匹配路由键的消息。这实现了精确路由。

### Topic Exchange 代码示例

Topic Exchange 支持模式匹配。以下示例基于 RabbitMQ 官方教程。

**生产者代码**：

Python

```

```

`import pika``import sys``   ``connection = pika.BlockingConnection(pika.ConnectionParameters('localhost'))``channel = connection.channel()``   ``# 声明 Topic Exchange``channel.exchange_declare(exchange='topic_logs', exchange_type='topic')``   ``routing_key = 'kern.warning'  # 示例：'kern.critical', 'auth.*' 等``message = 'Hello Topic!'``channel.basic_publish(exchange='topic_logs',`                      `routing_key=routing_key,`                      `body=message)``print(f" [x] Sent {routing_key}:{message}")``   ``connection.close()`

```

```

```

```

  

**消费者代码**：

Python

```

```

`import pika``import sys``   ``connection = pika.BlockingConnection(pika.ConnectionParameters('localhost'))``channel = connection.channel()``   ``channel.exchange_declare(exchange='topic_logs', exchange_type='topic')``result = channel.queue_declare(queue='', exclusive=True)``queue_name = result.method.queue``   ``# 绑定，使用通配符``binding_keys = ['kern.*', '*.critical']  # 示例：'#.logs', 'auth.#'``for binding_key in binding_keys:`    `channel.queue_bind(exchange='topic_logs',`                       `queue=queue_name,`                       `routing_key=binding_key)``   ``print(' [*] Waiting for logs. To exit press CTRL+C')``   ``def callback(ch, method, properties, body):`    `print(f" [x] {method.routing_key}:{body.decode()}")``   ``channel.basic_consume(queue=queue_name, on_message_callback=callback, auto_ack=True)``channel.start_consuming()`

```

```

```

```

  

**说明**：路由键如 'kern.warning' 会匹配 'kern.\*' 绑定。适合复杂过滤场景。

### Fanout Exchange 代码示例

Fanout Exchange 广播到所有绑定队列。

**生产者代码**：

Python

```

```

`import pika``   ``connection = pika.BlockingConnection(pika.ConnectionParameters('localhost'))``channel = connection.channel()``   ``# 声明 Fanout Exchange``channel.exchange_declare(exchange='logs', exchange_type='fanout')``   ``message = 'Hello Fanout!'``channel.basic_publish(exchange='logs',`                      `routing_key='',  # 忽略路由键`                      `body=message)``print(f" [x] Sent {message}")``   ``connection.close()`

```

```

```

```

  

**消费者代码**（可运行多个实例模拟广播）：

Python

```

```

`import pika``   ``connection = pika.BlockingConnection(pika.ConnectionParameters('localhost'))``channel = connection.channel()``   ``channel.exchange_declare(exchange='logs', exchange_type='fanout')``result = channel.queue_declare(queue='', exclusive=True)``queue_name = result.method.queue``   ``# 绑定队列到 Exchange（无路由键）``channel.queue_bind(exchange='logs', queue=queue_name)``   ``print(' [*] Waiting for logs. To exit press CTRL+C')``   ``def callback(ch, method, properties, body):`    `print(f" [x] {body.decode()}")``   ``channel.basic_consume(queue=queue_name, on_message_callback=callback, auto_ack=True)``channel.start_consuming()`

```

```

```

```

  

**说明**：消息会复制到所有绑定队列，无论路由键。理想用于广播。

这些示例是基础的；在生产环境中，添加错误处理和持久化。参考 RabbitMQ 官方文档（https://www.rabbitmq.com/tutorials）获取更多细节。